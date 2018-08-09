import React, { Component } from 'react';
import './Button.scss';


class Button extends Component {

  render() {
    return (
      <div className={this.props.className} onClick={this.props.onBtnClick} >Button</div>
    );
  }
}

export default Button;