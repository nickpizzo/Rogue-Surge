import React from 'react';
import { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import ContactModal from './ContactModal';

import '../../css/partials/footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<footer className="container-2" id="footer">
        <div className="footer-content">
          <div className="footer-icons">
            <a href="https://www.facebook.com/goingroguegg/" target="_blank"><FontAwesome className='footer-icon' size='2x' name='facebook-official'/></a>
            <a href="https://www.twitch.tv/team/rogue" target="_blank"><FontAwesome className='footer-icon' size='2x' name='twitch'/></a>
            <a href="https://www.instagram.com/rogue.gg/" target="_blank"><FontAwesome className='footer-icon' size='2x' name='instagram'/></a>
            <a href="https://twitter.com/goingroguegg?lang=en" target="_blank"><FontAwesome className='footer-icon' size='2x' name='twitter'/></a>
          </div>
          <ContactModal />
        </div>


      </footer>
		)
	}
}
