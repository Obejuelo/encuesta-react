import React, { Component } from 'react';
import Loginform from '../components/Loginform';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import * as actions from '../actions/userActions';

import {logIn} from '../helpers/helper';

class Login extends Component {
	state = {}

	componentDidMount(){
		// console.log(this.props.user)
	}
	
	sendData = (body) => {
		logIn(body)
			.then(data => {
				this.props.dispatch(actions.loadUser(data.user))
				this.props.dispatch(actions.login(data.jwt))
				setTimeout(() => {
					
					this.props.dispatch(push('/'))
				}, 1500);
			})
	}

	render() { 
		return (
			<div 
				className="page"
				style={{ 
					width: '100%', 
					height: '100vh', 
					display: 'flex', 
					justifyContent: 'center', 
					alignItems: 'center', 
					background: '#f5f5f5'
				}}>
				<Loginform 
					name='Nombre' 
					pass='Clave'
					user="Login" 
					login={this.sendData}/>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}
 
export default connect(mapeStateToProps)(Login);