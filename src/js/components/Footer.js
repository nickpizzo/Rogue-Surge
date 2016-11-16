import React from 'react';
import { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../../css/partials/footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<footer className="container-2">
        <div className="footer-content">
          <div className="footer-icons">
            <FontAwesome className='footer-icon' size='2x' name='facebook-official'/>
            <FontAwesome className='footer-icon' size='2x' name='twitch'/>
            <FontAwesome className='footer-icon' size='2x' name='instagram'/>
            <FontAwesome className='footer-icon' size='2x' name='twitter'/>
          </div>
          <div className="footer-contact">CONTACT</div>
        </div>
      </footer>
		)
	}
}
