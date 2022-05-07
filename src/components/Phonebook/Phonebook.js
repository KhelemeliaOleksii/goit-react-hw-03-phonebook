import { Component } from "react";
import { nanoid } from 'nanoid'

class Phonebook extends Component {
    inputNameId = nanoid();
    render() {
        const { options, onChangeInput, onSubmitForm } = this.props;
        const { contacts, name } = options;
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
                <button type="submit">Add contact</button>
            </form>
        )
    }
};

export default Phonebook;