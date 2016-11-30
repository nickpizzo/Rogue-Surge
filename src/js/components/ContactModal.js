import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../../css/partials/contact-modal.scss';

export default class ContactModal extends Component {
  state = {
    isOpen: false
  }

  openModal = () => {
    this.setState({isOpen: true})
  }

  closeModal = () => {
    this.setState({isOpen: false})
  }

  render() {
    const {isOpen} = this.state;

    if (isOpen) return (
      <div>
        <div id="modal-container">
          <div className="modal">
            <div className="modal-info">Email:&nbsp;<a href="mailto:contact@rogue.gg"><u>Contact@rogue.gg</u></a></div>
            <div onClick={this.closeModal} className="modal-close"><FontAwesome style={{ color: 'white' }} name='times'/></div>
          </div>
        </div>
        <div className="hidden-footer-contact ">CONTACT</div>
      </div>
    )

    return (
      <div onClick={this.openModal} className="footer-contact">CONTACT</div>
    )
  }
}
