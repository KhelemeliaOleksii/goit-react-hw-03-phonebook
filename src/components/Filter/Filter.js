import { Component } from "react";
import { nanoid } from "nanoid";

class Filter extends Component {
    render() {
        const findInputId = nanoid();
        const { filter, onChangeInput } = this.props;
        return (
            <div className="Search">
                <label htmlFor="findInputId">Find contacts by name</label>
                <input
                    type="text"
                    name="filter"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Search by name"
                    id={findInputId}
                    value={filter}
                    onChange={onChangeInput}
                    required
                />
            </div>

        )
    }
}
export default Filter