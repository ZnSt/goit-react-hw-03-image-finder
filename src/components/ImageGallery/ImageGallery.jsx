import { Component } from "react";

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

      fetch(`https://pixabay.com/api/?key=25755107-c5ecbaee54c3d5c87c2809c98&q=${nextImage}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error("Упс что-то пошло не так! Видимо в нашей галерее еще такого нет")
          );
        })
        .then((image) => this.setState({ image }))
        .catch((error) => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { image, loading, error } = this.state;
    return (
      <>
        {error && <h1>{error.message}</h1>}
        {loading && <div>Загружаем...</div>}
        <ul className="gallery">
          {image && (
            <li key={image.hits[0].id}>
              <img src={image.hits[0].webformatURL} alt={image.hits[0].tags} width="300" />
            </li>
          )}
        </ul>
      </>
    );
  }
}
