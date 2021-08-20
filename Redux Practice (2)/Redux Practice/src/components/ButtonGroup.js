import React, { Component } from "react";
class ButtonGroup extends Component {
    render() {
        return (
            <div>
                {this.props.technologies.map((tech, i) => (
                    <button
                        key={`btn-${i}`}
                    >
                        {tech}
                    </button>
                ))}
            </div>
        );
    }
}

export default ButtonGroup;
