import React, { Component } from 'react';
import '../Form-Create.scss';
import './FC-View.scss';
import FCText from './../Forms-Elements/FC-Text';

class FCView extends Component {

    renderFormElements() {

        console.log(this.props.currentList)
        let elList = [];

        this.props.currentList.forEach((el,i) => {
            elList.push(
            <div className="formElementHolder" key={i}>
                <FCText />
                <button onClick={() => this.props.removeElement(i)} >remove</button>
                <button>edit</button>
            </div>
            );
        });

        return elList
    }

    render() {
        return (
            <div className="FCView">
                {this.renderFormElements()}
            </div> 
        );
    }
}

export default FCView;