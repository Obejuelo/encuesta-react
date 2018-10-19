import React, { Component } from 'react';
import Appbar from '../components/navigation/Appbar';
import { getRelation } from '../helpers/helper';
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import {Link, withRouter} from 'react-router-dom';

class Dashboard extends Component {

	state = {
		relation: []
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
				this.setState({relation: data})
			})
	}

	_qualify = (materia, maestro) => {
		let matr = document.getElementById('LA0101').innerText;
		console.log(matr);
	}

	render() {
		return (
			<div>
				<Appbar/>
				<Button 
					variant="fab"
					className="FAB">
					<AddIcon />
				</Button>
				<div className="container" style={{ maxWidth: '100%' }}>
					<h1 style={{textAlign: 'center'}}>{this.props.user.grupo}</h1>
					<div className="row">
						<div className="col-xs-12 col-md-10 col-lg-10">
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
										{this.state.relation.map((materia, idx) => {
											return (
												<TableRow key={materia._id}>
													<TableCell>{materia.materia}</TableCell>
													<TableCell>{materia.maestro}</TableCell>
													<TableCell>
														<Link 
															to={`califica/${materia.materia}/${materia.maestro}`}
															style={{textDecoration: 'none'}} 
															mtro={materia.maestro}
															mtra={materia.materia}>
															<Button
																variant="outlined"
																size="small">
																Calificar
															</Button>
														</Link>
													</TableCell>
												</TableRow>
											)
										})}
									</TableBody>
								</Table>
							</Paper>
						</div>
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
 
export default withRouter(connect(mapeStateToProps)(Dashboard));