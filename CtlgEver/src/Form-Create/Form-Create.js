import React, { Component } from 'react';
import './Form-Create.scss';
import FCMenu from './Modules/FC-Menu';
import FCListBar from './Modules/FC-List-Bar';
import FCView from './Modules/FC-View';

class FormCreate extends Component {

    formElList = [];

    addElement(el) {
        console.log(el);
        this.formElList.push(el);
        this.forceUpdate();
    }

    removeElement(el) {
        console.log(this.formElList);
        this.formElList.splice(el,1);
        this.forceUpdate();
    }

    render() {

        return (
            <div className="formCreate">
                <FCMenu/>
                <FCView currentList={this.formElList} removeElement={(el) => this.removeElement(el)} />
                <FCListBar addNewElement={el => this.addElement(el)} />
            </div>
        );
    }
}

export default FormCreate;