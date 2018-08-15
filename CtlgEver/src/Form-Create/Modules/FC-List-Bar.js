import React, { Component } from 'react';
import '../Form-Create.scss';
import './FC-List-Bar.scss';
import FCText from './../Forms-Elements/FC-Text';


class FCListBar extends Component {



    render() {
        return (
            <div className="FCListBar">
                <FCText onClick={el => this.props.addNewElement(el)} />
                <FCText onClick={el => this.props.addNewElement(el)} />
                <FCText onClick={el => this.props.addNewElement(el)} />
            </div> 
        );
    }
}

export default FCListBar;