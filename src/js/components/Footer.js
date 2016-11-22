import React from 'react';
import { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../../css/partials/footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<footer className="container-2" id="footer">
        <div className="footer-content">
          <div className="footer-icons">
            <FontAwesome className='footer-icon' size='2x' name='facebook-official'/>
            <FontAwesome className='footer-icon' size='2x' name='twitch'/>
            <FontAwesome className='footer-icon' size='2x' name='instagram'/>
            <FontAwesome className='footer-icon' size='2x' name='twitter'/>
          </div>
          <a href="#modal-container" className="footer-contact" aria-label="Open Navigation">CONTACT</a>
        </div>

				<div id="modal-container">
					<div className="modal">
						<a href="#footer" className="modal-close" aria-label="Close Modal"><FontAwesome style={{ color: 'white' }} name='times'/></a>
						<span>Email:&nbsp;</span><a href="mailto:contact@rogue.gg"><u>Contact@rogue.gg</u></a>

					</div>
				</div>
      </footer>
		)
	}
}
