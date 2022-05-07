import { Component } from 'react';
import Phonebook from './Phonebook'
import contactsDefault from './Phonebook/Phonebook.json';

const INITIAL_STATE = {
  name: '',
}

export class App extends Component {

  state = {
    contacts: contactsDefault,
    name: '',
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("name:", name, "Value:", value);
    this.setState({ [name]: value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.addNewContact();
    this.reset();
  }
  addNewContact = () => {
    const { contacts, ...data } = this.state;
    this.setState((prevState) => {
      const newContactsArray = [...prevState.contacts];
      newContactsArray.unshift(data);
      return {
        contacts: newContactsArray
      }
    })
  }
  reset = () => {
    this.setState(() => ({ ...INITIAL_STATE }))
  }

  render() {
    // console.log(this.state);
    return (
      <Phonebook options={this.state} onChangeInput={this.handleChange} onSubmitForm={this.handleSubmit} />
    );
  }
};
