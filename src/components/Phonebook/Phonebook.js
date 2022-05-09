import { Component } from "react";
import { nanoid } from 'nanoid'

class Phonebook extends Component {
    inputNameId = nanoid();
    inputPhoneId = nanoid();
    onChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { options, onChangeInput, onSubmitForm } = this.props;
        // const { options, onSubmitForm, name, number } = this.props;
        const { name, number } = options;
        return (
            <form className="Phonebook" onSubmit={onSubmitForm}>
                <label htmlFor={this.inputNameId}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={onChangeInput}
                    id={this.inputNameId}
                    value={name}
                    required
                />
                <label htmlFor={this.inputPhoneId}>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={onChangeInput}
                    id={this.inputPhoneId}
                    value={number}
                    required
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
};

export default Phonebook;