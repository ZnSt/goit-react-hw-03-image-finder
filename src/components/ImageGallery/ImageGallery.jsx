import { Component } from 'react';
import { ImageErrorView } from 'components/ImageErrorView /ImageErrorView';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
export class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    error: null,
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
    const { image, loading, error } = this.state;
    if (image?.length === 0) {
      return (
        <ImageErrorView
          message={error?.message ? error.message : 'Ничего не найдено'}
        />
      );
    }
    return (
      <>
        {loading && <div>Загружаем...</div>}
        <ul>{image && <ImageGalleryItem data={image} />}</ul>
      </>
    );
  }
}

//  {
//    image && (
//      <li key={image.hits[0].id}>
//        <img
//          src={image.hits[0].webformatURL}
//          alt={image.hits[0].tags}
//          width="300"
//        />
//      </li>
//    );
//  }
