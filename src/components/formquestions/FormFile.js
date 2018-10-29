import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './style.css';

class Formfile extends Component {

	_sendTeacher = (e) => {
		e.preventDefault();
		console.log('object');
	}

	_renderButton = () => {
		if(this.props.teach.length === 0){
			return <input type="submit" value="Cargar" className="upload" />
		} else {
			return <button className="send" onClick={this.props.send}>Enviar</button>
		}
	}
	render() { 
		// console.log(this.props.teach.length);
		return (
			<div>
				<Card
					style={{ 
						marginTop: '10px',
						padding: '20px',
						width:'250px',
						marginRight: 'auto',
						marginLeft: 'auto'
						}}>
					<h4 style={{margin: '0 0 5px 0', fontWeight: '500'}}>Agregar maestro</h4>
					<form onSubmit={this.props.file}>
						<input type="file" id="file" name="file" className="file" required/>
						{this._renderButton()}
						<div style={{ cursor: 'pointer', color: '#005f63'}} onClick={this.props.modal}><p>Individual</p></div>
					</form>
				</Card>
			</div>
		);
	}
}
 
export default Formfile;