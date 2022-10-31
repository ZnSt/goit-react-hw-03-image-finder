import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  SearchForm,
  Input,
  Label,
  BtnSearch,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleSubmitForm = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast('Введите корректное название!');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.reset();
  };

  reset = () => {
    this.setState({ imageName: '' });
  };

  handleImageChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmitForm}>
          <Label>
            <Input
              type="text"
              name="imageName"
              placeholder="Search images and photos"
              autoComplete="off"
              autoFocus
              value={this.state.imageName}
              onChange={this.handleImageChange}
            />
          </Label>
          <BtnSearch></BtnSearch>
        </SearchForm>
      </Header>
    );
  }
}
