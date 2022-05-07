import { Component } from 'react';
import { nanoid } from 'nanoid';

import contactsDefault from './ContactsList.json';
import Section from './Section'
import Phonebook from './Phonebook'
import Contacts from './Contacts'

const INITIAL_STATE = {
  name: '',
  number: '',
}

export class App extends Component {

  state = {
    contacts: contactsDefault,
    name: '',
    number: '',
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
    console.log(this.state);
  }
  addNewContact = () => {
    this.setState(({ contacts, ...data }) => {
      const newContactsArray = [...contacts];

      const personId = nanoid();
      data.id = personId;
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
      <>
        <Section title="Phonebook">
          <Phonebook options={this.state} onChangeInput={this.handleChange} onSubmitForm={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          <Contacts options={this.state} />
        </Section>
      </>
    );
  }
};
