import { Component } from "react";
import PropTypes from 'prop-types';

import styles from './ContactsList.module.css'

class ContactsList extends Component {

    render() {
        const { contacts, onClickDelete } = this.props;
        return (
            <ul className={styles.List}>
                {contacts.map((item) => {
                    const { id, name, number } = item;
                    return (
                        <li className="item"
                            key={id}
                        >
                            <span>{name} : </span>
                            <span>{number} </span>
                            <button type="button" onClick={() => onClickDelete(id)}> Delete</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onClickDelete: PropTypes.func.isRequired,
}
export default ContactsList;