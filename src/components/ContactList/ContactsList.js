import { Component } from "react";

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

export default ContactsList;