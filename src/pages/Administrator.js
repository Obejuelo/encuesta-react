import React, { Component } from 'react';
import {connect} from 'react-redux';

import { logOut } from '../actions/userActions';
import Sidebar from '../components/navigation/SideBar';
import Adminbar from '../components/navigation/Adminbar';

class Administrator extends Component {

	signOut = () => {
		this.props.dispatch(logOut());
		this.props.history.push('/admin');
	}

	showMenu = () => {
		let menu = document.querySelector('.sidebar');
		let op = document.querySelector('.opacity');
		menu.style.transform = 'translateX(0px)';
		op.style.display = 'block';
	}

	hideMenu(){
		let op = document.querySelector('.opacity');
		let menu = document.querySelector('.sidebar');
		menu.style.transform = 'translateX(-250px)'
		op.style.display = 'none';
	}

	render() { 
		return (
			<div className="page" style={{width: '100%'}}>
				<Adminbar show={this.showMenu}/>
				<Sidebar logout={this.signOut} ref={this.menuRef}/>
				<div className='opacity' onClick={this.hideMenu}></div>
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