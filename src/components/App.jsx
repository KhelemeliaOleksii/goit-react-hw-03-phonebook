import { Component } from 'react';
import { nanoid } from 'nanoid';

// import contactsDefault from './ContactsList.json';
import ContactForm from './ContactForm'
import ContactsList from './ContactList'
import Filter from './Filter'

const INITIAL_STATE = {
  filter: '',
}

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }
  componentDidMount() {
    const dataLocalStorage = localStorage.getItem("contacts");
    const dataParse = JSON.parse(dataLocalStorage);
    this.setState({ contacts: dataParse });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }
  addNewContact = (data) => {
    if (this.isContactExist(data)) {
      const msg = `${data.name} is already in contacts`
      alert(msg);
      return;
    }
    this.setState(({ contacts }) => {
      const newContactArray = [...contacts];
      const { name, number } = data;
      const personId = nanoid();
      newContactArray.unshift({
        "id": personId,
        "name": name,
        "number": number,
      });

      return {
        contacts: newContactArray
      }
    })
  }

  removeContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(item => item.id !== id)
    })
    )
  }

  filterContacts() {
    if (this.state.filter === '') {
      return this.state.contacts;
    }
    const filteredArray = this.state.contacts.filter((item) => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return filteredArray;
  }

  isContactExist(contact) {
    const result = this.state.contacts.find(({ name }) =>
      contact.name.toLowerCase() === name.toLowerCase());
    return !!result
  }

  reset = () => {
    this.setState(() => ({ ...INITIAL_STATE }))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <h1>Phonebook </h1>
        <ContactForm onSubmitForm={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChangeInput={this.handleChange} />
        <ContactsList contacts={this.filterContacts()} onClickDelete={this.removeContact} />
      </>
    );
  }
};
