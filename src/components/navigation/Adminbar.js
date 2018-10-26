import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

class Adminbar extends Component {

	
	state = {}

	_showMenu = () => {
		console.log(this.props.show());
	}
	render() { 
		return (
			<AppBar position="static" style={{ background: '#006064' }}>
				<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
					<i className="fas fa-bars" style={{cursor: 'pointer'}} onClick={this._showMenu}></i>
					<Button color="inherit" style={{ float: 'right' }}>Usuario</Button>
				</Toolbar>
			</AppBar>
		);
	}
}
 
export default Adminbar;