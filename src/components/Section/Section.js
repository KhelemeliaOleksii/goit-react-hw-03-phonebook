import { Component } from "react";

class Section extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className="section" >
                <h2 className="title">
                    {title}
                </h2>
                {children}
            </div>
        )
    }
};

export default Section;