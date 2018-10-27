import React, { Component } from 'react';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link ,withRouter} from 'react-router-dom';
import './style.css';

import { logOut } from '../../actions/userActions';

class Adminbar extends Component {

	showMenu = () => {
		let menu = document.querySelector('.sidebar');
		let op = document.querySelector('.opacity');
		menu.style.transform = 'translateX(0px)';
		menu.style.boxShadow = '2px 2px 10px 2px rgba(0, 0, 0, .5)';
		op.style.display = 'block';
	}

	hideMenu() {
		let op = document.querySelector('.opacity');
		let menu = document.querySelector('.sidebar');
		menu.style.transform = 'translateX(-250px)'
		menu.style.boxShadow = 'none';
		op.style.display = 'none';
	}

	signOut = () => {
		this.props.dispatch(logOut());
		this.props.history.push('/admin');
	}

	_renederName = () => {
		return this.props.admin.name ? this.props.admin.name : '';
	}

	render() { 
		return (
			<div>
				<AppBar position="static" style={{ background: '#006064', zIndex:'1'}}>
					<Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
						<i className="fas fa-bars" style={{ cursor: 'pointer', fontSize: '1.5em' }} onClick={this.showMenu}></i>
						<Link to="/" style={{textDecoration:'none',color:'#f5f5f5'}}>
							<Button color="inherit" style={{ float: 'right' }}>{this._renederName()}</Button>
						</Link>
					</Toolbar>
				</AppBar>
				<div className="sidebar">
					<div className="logo"><h2>Dashboard</h2></div>
					<nav className="menu">
						<Link to="/matter"><i className="fas fa-chalkboard-teacher"></i><span>Maestros</span></Link>
						<Link to="/"><i className="fas fa-user-graduate"></i><span>Estudiantes</span></Link>
						<Link to="/"><i className="fas fa-book"></i><span>Materias</span></Link>
						<Link to="/"><i className="fas fa-database"></i><span>Relación</span></Link>
						<Link to="/"><i className="fas fa-question"></i><span>Preguntas</span></Link>
						<Link to="/"><i className="fas fa-users"></i><span>Usuarios</span></Link>
						<Link to="/"><i className="fas fa-chart-pie"></i><span>Reportes</span></Link>
						<Button onClick={this.signOut} style={{ color: '#f5f5f5' }}>Salir</Button>
					</nav>
				</div>
				<div className='opacity' onClick={this.hideMenu}></div>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps) {
	return {
		admin: state.user
	}
}
 
export default withRouter(connect(mapeStateToProps)(Adminbar));