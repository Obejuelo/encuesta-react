import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './style.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Modalform extends Component {

	claveRef = new React.createRef();
	nameRef = new React.createRef();
	
	_hideModal = () => {
		let modal = document.querySelector('.modal');
		let cardForm = document.querySelector('.cardForm');
		let contentModal = document.querySelector('.content-modal');
		modal.style.animation = '.3s fadeOut 1';
		cardForm.style.animation = '.3s hide 1';
		setTimeout(() => {
			modal.style.display = 'none';
			cardForm.style.display = 'none';
			contentModal.style.display = 'none';
		}, 250);
	}

	_handleSubmit = async (e) => {
		e.preventDefault();
		let inputClave = document.getElementById('inputClave')
		let inputName = document.getElementById('inputName')

		let body = {
			clave: inputClave.value,
			nombre: inputName.value
		}

		await this.props.sendOne(body)
		await this._hideModal();

		await document.querySelector('.form').reset();
	}

	render() { 
		return (
			<div className="content-modal">
				<div className="modal" onClick={this._hideModal}>
				</div>
				<Card className="cardForm" style={{textAlign: 'center'}}>
					<h3 style={{fontWeight: '500', margin: '0'}}>Agregar maestro</h3>
					<form onSubmit={this._handleSubmit} className="form">
						<TextField
							label="Clave"
							margin="normal"
							id="inputClave"
							required
							style={{width: '100%'}}
						/>
						<TextField
							label="Nombre"
							margin="normal"
							id="inputName"
							required
							style={{width: '100%'}}
						/>
						<Button
							variant="contained"
							type='submit'
							style={{ background: '#006064', color: '#fff' }}>
							Enviar
						</Button>
					</form>
				</Card>
			</div>
			
		);
	}
}
 
export default Modalform;