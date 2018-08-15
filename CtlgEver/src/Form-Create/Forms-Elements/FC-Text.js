import React, { Component } from 'react';
import './Forms-Elements.scss';

class FCText extends Component {

    textFormElement = {
        type: "Text",
        name: "text box",
        placeholder: "text box"
    }

    render() {
        return (
            <div 
            /* contentEditable={this.props.onClick ? "false" : "true"} */
            className={"FCElement FCText " + (this.props.onClick ? "clickable" : "")} 
            onClick={this.props.onClick ? () => {this.props.onClick(this.textFormElement)} : undefined}>
            {this.textFormElement.placeholder}
            </div> 
        );
    }
}

export default FCText;