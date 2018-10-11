import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';

import {logOut} from '../../actions/userActions';;

class Appbar extends Component {
	logOut = () => {
		this.props.dispatch(logOut());
	}
	render() { 
		return ( 
			<AppBar position="static" style={{ background: '#006064'}}>
				<Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
					<IconButton color="inherit" aria-label="Menu">
						{this.props.user.nombre}
					</IconButton>
					
					<Button color="inherit" style={{float: 'right'}} onClick={this.logOut}>Logout</Button>
				</Toolbar>
			</AppBar>
		);
	}
}

function mapeStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}
 
export default connect(mapeStateToProps)(Appbar);