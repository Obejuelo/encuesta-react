import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './style.css';

class Modalform extends Component {
	
	_hideModal = () => {
		let modal = document.querySelector('.modal');
		let cardForm = document.querySelector('.cardForm');
		let contentModal = document.querySelector('.content-modal');
		modal.style.animation = '.3s hide 1';
		cardForm.style.animation = '.3s hide 1';
		setTimeout(() => {
			modal.style.display = 'none';
			cardForm.style.display = 'none';
			contentModal.style.display = 'none';
		}, 250);
	}

	render() { 
		return (
			<div className="content-modal">
				<div className="modal" onClick={this._hideModal}>
				</div>
				<Card className="cardForm">
					<h1>Soy un modal</h1>
				</Card>
			</div>
			
		);
	}
}
 
export default Modalform;