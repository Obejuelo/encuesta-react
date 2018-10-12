import React, { Component } from 'react';
import Appbar from '../components/navigation/Appbar';
import {getRelation, getMatter} from '../helpers/helper';
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Dashboard extends Component {
	state = {
		matters: [],
		name: [],
		teacher:[]
	}

	componentDidMount(){
		if (this.props.user.jwt.length === 0) {
			return
		} else {
			this._getRelation()
		}
	}

	_getRelation = () => {
		let matr = this.props.user.matricula;
		let token = this.props.user.jwt;
		getRelation(matr, token)
			.then(data => {
				this.setState({matters: data})
				data.forEach(name => {
					this._setName(name.clave)
				});
			})
		
	}

	_setName = (matr) => {
		let nombre = this.state.name;
		getMatter(matr)
			.then(data => {
				console.log(data);
				nombre.push(data)
				this.setState({name: nombre })
			})
	}

	adName =() => {
		this.state.name.map(ds => {
			console.log(ds);
			return `${ds}`
			
		})
	}

	render() {
		// if (this.state.name.length === this.state.matters.length) { this.state.name.map(ds => {
		// 	console.log(ds);
		// })}
		return (
			<div>
				<Appbar/>
				<div className="container">
					{/* <li>{this.props.user.ciclo}</li>
					<li>{this.props.user.matricula}</li>
					<li>{this.props.user.nombre}</li>
					<li>{this.props.user.grupo}</li> */}
					{/* {this.state.token.length !== 0 ? this._getRelation() : ''} */}

					<h1 style={{textAlign: 'center'}}>{this.props.user.grupo}</h1>

					<div className="row">
						<div className="col-xs-12 col-md-10 col-lg-10">

						</div>
						<Paper >
							<Table >
								<TableHead>
									<TableRow>
										<TableCell>Materia</TableCell>
										<TableCell numeric>Maestro</TableCell>
										<TableCell numeric>calificar</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.matters.map(row => {
										return (
											<TableRow key={row._id}>
												<TableCell component="th" scope="row">
													{this.state.name.length === this.state.matters.length ? this.adName() : ''}
												</TableCell>
												<TableCell numeric>{row.codigo}</TableCell>
												<TableCell numeric></TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</Paper>
					</div>
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