import React, { Component } from 'react';
import Appbar from '../components/navigation/Appbar';
import {getRelation} from '../helpers/helper';
import {connect} from 'react-redux';

class Dashboard extends Component {
	state = {
		token: ''
	}

	componentDidMount(){
		this.setState({token: this.props.user.jwt})
		
	}

	_getRelation = () => {
		let matr = this.props.user.matricula;
		let token = this.state.token;
		getRelation(matr, token)
			.then(data => {
				console.log(data);
			})
	}

	render() { 
		return (
			<div>
				<Appbar/>
				<div className="container">
					{/* <li>{this.props.user.ciclo}</li>
					<li>{this.props.user.matricula}</li>
					<li>{this.props.user.nombre}</li>
					<li>{this.props.user.grupo}</li> */}
					{this.state.token.length !== 0 ? this._getRelation() : ''}
				</div>
			</div>
		);
	}
}
function mapeStateToProps(state, ownProps) {
	return {
		user: state.user
	}
}
 
export default connect(mapeStateToProps) (Dashboard);