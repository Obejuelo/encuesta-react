import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {logOut} from '../../actions/userActions';;

class Appbar extends Component {
	logOut = () => {
		this.props.dispatch(logOut());
		this.props.history.push('/');
	}
	render() { 
		return ( 
			<AppBar position="static" style={{ background: '#006064'}}>
				<Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
					<Link to="/" style={{textDecoration: 'none', color: "#f5f5f5"}}>
						<h3 color="inherit" aria-label="Menu">{this.props.user.nombre}</h3>
					</Link>
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
 
export default withRouter(connect(mapeStateToProps)(Appbar));