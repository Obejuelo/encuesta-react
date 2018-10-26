import React, { Component } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import Login from './Login';
import Dashboard from './Dashboard';
import Califica from './Califica';
import Admin from './Admin';
import Administrator from './Administrator';
import Matter from './Matter';

import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group';

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
			<div>
				<Route render={({location}) => (
					<TransitionGroup>
						<CSSTransition
							key={location.key}
							timeout={300}
							classNames="fade">
							<Switch location={location}>
								<Route exact path="/" component={this.home()} />
								<Route exact path="/califica/:materia" component={Califica} />
								<Route exact path="/admin" component={this.admin()} />
								<Route exact path="/matter" component={Matter} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}/>
			</div>
		);
	}
}

const mapeStateToProps = (state, ownProps) => {
	return{
		user: state.user
	}
}
 
export default withRouter(connect(mapeStateToProps)(Home));