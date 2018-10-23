import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import Button from '@material-ui/core/Button';

class Sidebar extends Component {
	state = {}

	logOut = () => {
		this.props.logout();
	}

	render() { 
		return (
			<div className="sidebar">
				<div className="logo"><h2>Dashboard</h2></div>
				<nav className="menu">
					<Link to="/"><i className="fas fa-chalkboard-teacher"></i><span>Maestros</span></Link>
					<Link to="/"><i className="fas fa-user-graduate"></i><span>Estudiantes</span></Link>
					<Link to="/"><i className="fas fa-book"></i><span>Materias</span></Link>
					<Link to="/"><i className="fas fa-database"></i><span>Relación</span></Link>
					<Link to="/"><i className="fas fa-question"></i><span>Preguntas</span></Link>
					<Link to="/"><i className="fas fa-users"></i><span>Usuarios</span></Link>
					<Link to="/"><i className="fas fa-chart-pie"></i><span>Reportes</span></Link>
					<Button onClick={this.logOut} style={{color: '#f5f5f5'}}>Salir</Button>
				</nav>
			</div>
		);
	}
}
 
export default Sidebar;