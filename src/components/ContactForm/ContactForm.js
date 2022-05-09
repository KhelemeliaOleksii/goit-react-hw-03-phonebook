import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

import styles from './ContactForm.module.css'

const INITIAL_STATE = {
    name: '',
    number: '',
}
class Phonebook extends Component {
    inputNameId = nanoid();
    inputPhoneId = nanoid();
    state = {
        name: '',
        number: '',
    }
    onChangeInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {}
        for (let entry of formData.entries()) {
            data[entry[0]] = entry[1]
        }

        //send data to parent component
        this.props.onSubmitForm(data);

        this.reset();
    }
    reset = () => {
        this.setState(() => ({ ...INITIAL_STATE }))
    }
    render() {
        return (
            <form className={styles.ContactForm} onSubmit={this.onSubmit}>
                <label htmlFor={this.inputNameId}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    onChange={this.onChangeInput}
                    id={this.inputNameId}
                    value={this.state.name}
                    required
                />
                <label htmlFor={this.inputPhoneId}>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    onChange={this.onChangeInput}
                    id={this.inputPhoneId}
                    value={this.state.number}
                    required
                />
                <button type="submit"><span>Add contact</span></button>
            </form>
        )
    }
};

Phonebook.propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
}

export default Phonebook;