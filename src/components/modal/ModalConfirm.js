import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Modalconfirm extends Component {
	
	_hideModal = () => {
		let modal = document.querySelector('.modal-confirm');
		let cardForm = document.querySelector('.cardForm-confirm');
		let contentModal = document.querySelector('.content-confirm');
		modal.style.animation = '.3s fadeOut 1';
		cardForm.style.animation = '.3s hide 1';
		setTimeout(() => {
			modal.style.display = 'none';
			cardForm.style.display = 'none';
			contentModal.style.display = 'none';

			this.props.clear();
		}, 250);
	}

	_delete = async () => {
		let delet = await  this.props.delete;
		delet();
		let hide = await this._hideModal;
		hide();
	}

	render() { 
		return (
			<div className="content-confirm">
				<div className="modal-confirm">
				</div>
				<Card className="cardForm-confirm" style={{ textAlign: 'center' }}>
					<h2 style={{textAlign: 'center', fontWeight: '500'}}>Estas a punto de eliminar un registro!!!</h2>
					<div>
						<i className="fas fa-exclamation-triangle"></i>
					</div>
					<Button
						variant="contained"
						onClick={this._hideModal}
						style={{ background: '#006064', color: '#fff', margin: '20px 10px 0 10px' }}>
						Cancelar
						</Button>
					<Button
						variant="contained"
						onClick={this._delete}
						style={{ background: '#D32F2F', color: '#fff', margin: '20px 10px 0 10px' }}>
						Eliminar
						</Button>
				</Card>
			</div>
		);
	}
}
 
export default Modalconfirm;