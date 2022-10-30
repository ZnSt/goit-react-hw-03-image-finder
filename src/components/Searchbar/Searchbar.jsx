import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Searchbar extends Component {
  state = {
    imageName: "",
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    if (this.state.imageName.trim() === "") {
      toast("Введите корректное название!");
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.reset();
  };

  reset = () => {
    this.setState({ imageName: "" });
  };

  handleImageChange = (event) => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          <input
            type="text"
            name="imageName"
            placeholder="Ищи меня здесь"
            value={this.state.imageName}
            onChange={this.handleImageChange}
          />
        </label>
        <button>Search</button>
      </form>
    );
  }
}
