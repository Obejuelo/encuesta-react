import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Loginform extends Component {
	state = {}

	signIn = () => {
		let nombre = document.getElementById('name').value;
		let matricula = document.getElementById('pass').value;

		let body = {nombre, matricula};

		this.props.login(body);
	}

	render() { 
		return (
			<Card>
				<form className="form-login" style={{textAlign:'center'}}>
					<h4 style={{textAlign: 'center', marginBottom: '-10px'}}>Login</h4>
					<TextField
						id="name"
						label={this.props.name}
						type="text"
						margin="normal"
						color="secondary"
						style={{width: '100%'}}
					/>
					<TextField
						id="pass"
						label={this.props.pass}
						type="password"
						margin="normal"
						style={{ width: '100%' }}
					/>
					<Button
						onClick={this.signIn}
						variant="contained"
						style={{ marginBottom: '10px', background:'#006064', color:'#fff'}}>
						Entrar
					</Button>
				</form>
			</Card>
		);
	}
}
 
export default Loginform;