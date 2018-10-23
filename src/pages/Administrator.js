import React, { Component } from 'react';
import {connect} from 'react-redux';

import { logOut } from '../actions/userActions';
import Sidebar from '../components/navigation/SideBar';

class Administrator extends Component {
	state = {}

	signOut = () => {
		this.props.dispatch(logOut());
		this.props.history.push('/admin');
	}

	render() { 
		return (
			<div className="">
				<Sidebar logout={this.signOut}/>
				<div className="main page"><h3>hola mundo</h3></div>
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