import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Login from './Login';
import Dashboard from './Dashboard';
import Califica from './Califica';

//const userRegister = true;

class Home extends Component {
	state = {}

	home() {
		if (this.props.user.jwt) return Dashboard
		return Login
	}
	render() { 
		return (
			<Switch>
				<Route exact path="/" component={this.home()} />
				<Route exact path="/califica/:materia/:maestro" component={Califica} />
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