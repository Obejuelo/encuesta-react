import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Login from './Login';
import Dashboard from './Dashboard';
import Califica from './Califica';
import Admin from './Admin';
import Administrator from './Administrator';

//const userRegister = true;

class Home extends Component {
	state = {}

	componentDidMount(){
		// console.log(this.props.user.email);
	}

	home() {
		if (this.props.user.jwt && this.props.user.matricula) 
			return Dashboard
		if (this.props.user.jwt && this.props.user.email)
			return Administrator 
		return Login
	}
	admin() {
		if (this.props.user.jwt && this.props.user.matricula)
			return Dashboard
		if (this.props.user.jwt && this.props.user.email)
			return Administrator
		return Admin
	}

	render() { 
		return (
			<Switch>
				<Route exact path="/" component={this.home()} />
				<Route exact path="/califica/:materia" component={Califica} />
				<Route exact path="/admin" component={this.admin()} />
			</Switch>
		);
	}
}

const mapeStateToProps = (state, ownProps) => {
	return{
		user: state.user
	}
}
 
export default withRouter(connect(mapeStateToProps)(Home));