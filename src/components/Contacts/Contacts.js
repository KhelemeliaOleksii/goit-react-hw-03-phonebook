import { Component } from "react";

class Contacts extends Component {
    render() {
        const { contacts } = this.props.options;
        return (
            <ul className="List">
                {contacts.map((item) => {
                    const { id, name, number } = item;
                    return (
                        <li className="item"
                            key={id}
                        >
                            <span>{name} : </span>
                            <span>{number} </span>
                        </li>
                    )
                })}
            </ul>
        )
    }
};

export default Contacts;