import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";

export class App extends Component {
  state = {
    imageName: "",
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
