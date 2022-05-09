import { Component } from 'react';
// import { nanoid } from 'nanoid';

// import contactsDefault from './ContactsList.json';
// import Section from './Section'
// import Phonebook from './Phonebook'
// import Contacts from './Contacts'
// import Filter from './Filter'

// const INITIAL_STATE = {
//   filter: '',
//   name: '',
//   number: '',
// }

// export class App extends Component {

//   state = {
//     contacts: contactsDefault,
//     filter: '',
//     name: '',
//     number: '',
//   }
//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = {}
//     for (let entry of formData.entries()) {
//       data[entry[0]] = entry[1]
//     }

//     this.addNewContact(data);
//     this.reset();
//   }

//   addNewContact = ({ name, number }) => {
//     this.setState(({ contacts }) => {
//       const newContactsArray = [...contacts];

//       const personId = nanoid();
//       // id = personId;
//       newContactsArray.unshift({
//         "id": personId,
//         "name": name,
//         "number": number,
//       });

//       return {
//         contacts: newContactsArray
//       }
//     })
//   }

//   reset = () => {
//     this.setState(() => ({ ...INITIAL_STATE }))
//   }

//   filterContacts() {
//     if (this.state.filter === '') {
//       return this.state.contacts;
//     }
//     const filteredArray = this.state.contacts.filter((item) => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
//     return filteredArray;
//   }
//   render() {
//     // console.log(this.state);
//     return (
//       <>
//         <Section title="Phonebook">
//           <Phonebook options={this.state} onChangeInput={this.handleChange} onSubmitForm={this.handleSubmit} />
//           {/* <Phonebook options={this.state} onSubmitForm={this.handleSubmit} /> */}
//         </Section>
//         <Section title="Contacts">
//           <Filter options={this.state} onChangeInput={this.handleChange} />
//           <Contacts contacts={this.filterContacts()} />
//         </Section>
//       </>
//     );
//   }
// };

export class App extends Component {
  state = {
    name: "Oleksii"
  }
  render() {
    return (
      <div> Hello</div>
    )
  }
}