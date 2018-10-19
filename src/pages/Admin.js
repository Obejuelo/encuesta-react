import React, { Component } from 'react';
import Loginform from '../components/Loginform';
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import * as actions from '../actions/userActions';

import { loginAdmin } from '../helpers/helper';

class Admin extends Component {
	state = {}

	componentDidMount() {
		// console.log(this.props.admin)
	}

	sendData = (body) => {
		loginAdmin(body)
			.then(data => {
				this.props.dispatch(actions.loadUser(data.user))
				this.props.dispatch(actions.login(data.jwt))
				setTimeout(() => {
					this.props.history.push('/')
				}, 1500);
			})
	}

	render() {
		return (
			<div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' }}>
				<Loginform 
					name='Email' 
					pass='Password'
					user="Admin"
					login={this.sendData}/>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps) {
	return {
		admin: state.user
	}
}

export default connect(mapeStateToProps)(Admin);