import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { logOut } from '../actions/userActions';

class Administrator extends Component {
	state = {}

	componentDidMount() {
		// console.log(this.props.admin);
	}

	logOut = () => {
		this.props.dispatch(logOut());
		this.props.history.push('/admin');
	}

	render() { 
		return (
			<div>
				<h1>Page of Management</h1>
				<Button color="inherit" style={{ float: 'right' }} onClick={this.logOut}>Logout</Button>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps){
	return {
		admin: state.user
	}
}
export default connect(mapeStateToProps)(Administrator);