import React, { Component } from 'react';
import Appbar from '../components/navigation/Appbar';
import { getRelation, getStudentAndMatter } from '../helpers/helper';
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import {Link, withRouter} from 'react-router-dom';

class Dashboard extends Component {

	state = {
		relation: [],
		answers: []
	}

	componentDidMount(){
		if (this.props.user.jwt.length === 0) {
			return
		} else {
			this._getRelation()
		}
		this._getAnswer();
	}

	_getRelation = () => {
		let matr = this.props.user.matricula;
		let token = this.props.user.jwt;
		getRelation(matr, token)
			.then(data => {
				this.setState({relation: data})
			})
	}

	_getAnswer = () => {
		setTimeout(() => {
			let student = this.props.user._id;
			this.state.relation.forEach(res => {
				let answer = this.state.answers;
				getStudentAndMatter(student, res.clave)
					.then(data => {
						if (data !== null) {
							answer.push(data);
						}
						this.setState({answers: answer})
					})
			})
		}, 500);
	}

	_renderButton = (name) => {
		let filter = this.state.answers.filter((matr) => {
			return name === matr.materia;
		})
		if (filter.length !== 0) {
			return(
				<Link to='/' style={{ textDecoration: 'none', pointerEvents: 'none' }}>
					<Button
						disabled
						variant="outlined"
						size="small">
						califica
					</Button>
				</Link>
			)
		} else {
			return(
				<Link to={`califica/${name}`} style={{ textDecoration: 'none' }}>
					<Button
						variant="outlined"
						size="small">
						califica
					</Button>
				</Link>
			)
		}
	}

	_renderRelation(){
		return this.state.relation.map((materia, idx) => {
			return (
				<TableRow key={materia._id}>
					<TableCell>{materia.materia}</TableCell>
					<TableCell>{materia.maestro}</TableCell>
					<TableCell>
						{this._renderButton(materia.clave)}
					</TableCell>
				</TableRow>
			)
		})
	}

	render() {
		return (
			<div className="page">
				<Appbar/>
				<Button 
					variant="fab"
					className="FAB">
					<i className="fas fa-envelope" style={{fontSize: '1.5em'}}></i>
				</Button>
				<div className="container" style={{ maxWidth: '100%' }}>
					<h1 style={{textAlign: 'center'}}>{this.props.user.grupo}</h1>
					<div className="row center-xs" style={{margin: '0'}}>
						<div className="col-xs-12 col-md-10 col-lg-10">
							<Paper>
								<Table >
									<TableHead>
										<TableRow>
											<TableCell>Materia</TableCell>
											<TableCell>Maestro</TableCell>
											<TableCell>calificar</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{this._renderRelation()}
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