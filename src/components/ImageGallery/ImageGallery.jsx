import { Component } from 'react';
import { Audio } from 'react-loader-spinner';

import { ImageErrorView } from 'components/ImageErrorView /ImageErrorView';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { LoaderBtn } from 'components/Button';
import { Modal } from 'components/Modal';
import { List } from './ImageGallery.styled';
export class ImageGallery extends Component {
  state = {
    image: null,
    error: null,
    largeImage: { src: '', alt: '' },
    showModal: false,
    loading: false,
    page: 1,
  };

  openModal = id => {
    const pictures = this.state.image;
    const { largeImageURL, tags } = pictures.find(picture => picture.id === id);
    this.setState({ largeImage: { src: largeImageURL, alt: tags } });
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImage: { src: '', alt: '' } });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevProps.imageName;
    const nextImage = this.props.imageName;
    if (prevImage !== nextImage) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextImage}&page=1&key=25755107-c5ecbaee54c3d5c87c2809c98&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              'Упс что-то пошло не так! Видимо в нашей галерее еще такого нет'
            )
          );
        })
        .then(image => this.setState({ image: image.hits }))
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { image, error, showModal, largeImage } = this.state;
    if (image?.length === 0) {
      return (
        <ImageErrorView
          message={
            error?.message ? error.message : 'Упс...Кажется ничего не найдено'
          }
        />
      );
    }
    return (
      <>
        <List>
          {image?.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
              openModal={this.openModal}
            />
          ))}
        </List>
        {showModal && (
          <Modal closeModal={this.closeModal} largeImage={largeImage} />
        )}
        <LoaderBtn />
        {this.state.loading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        )}
      </>
    );
  }
}
