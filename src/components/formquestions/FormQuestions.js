import React, { Component } from 'react';
import { getQuestion, setResp, getMatter, getStudentAndMatter} from '../../helpers/helper';
import './style.css';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Formquestions extends Component {

	state= {
		questions: [],
		matter: {},
		answers: null
	}

	componentDidMount(){
		this._getQuestions();
		this._getMatter();
		this._getAnswer();
		setTimeout(() => {
			if (this.state.answers !== null) {
				this.props.history.push('/')
			}
		}, 10);
		
	}

	_sendResp = () => {
		const token = this.props.user.jwt;
		this.state.questions.forEach((quest, idx) => {
			let index = idx + 1;
			let resp = document.getElementById(`resp${index}`);
			let select = resp.options[resp.selectedIndex].text;

			let body = {
				alumno: this.props.id,
				materia: this.state.matter.clave,
				pregunta: quest._id,
				resp: select
			}

			setResp(body, token).then(data => {
				// console.log('Egistro exitoso');
			})
		})

		alert('registro exitoso');
		this.props.history.push('/')
	}

	_getQuestions = () => {
		getQuestion().then(data => {
			this.setState({ questions: data })
		})
	}

	_getMatter = () => {
		getMatter(this.props.materia)
			.then(data => {
				this.setState({matter: data})
			})
	}

	_getAnswer = () => {
		let student = this.props.user._id;
		let matter = this.props.materia;
		getStudentAndMatter(student, matter)
			.then(data => {
				this.setState({ answers: data })
			})
	}

	render() { 
		return (
			<div style={{textAlign: 'center', marginTop: '10px', padding: '0 5px'}}>
				<Card style={{
						width: '250px',
						marginRight: 'auto',
						marginLeft: 'auto',
						background: '#fff',
						color:'#005f63'
					}}>
					<div style={{padding: '10px 0px'}}>
						<h4>{this.state.matter.nombre}</h4>
						<h5>{this.state.matter.maestro}</h5>
					</div>
				</Card>
				{this.state.questions.map((ques, idx) => {
					return(
						<Card 
							key={ques._id}
							style={{margin: '20px 0'}}>
							<div style={{padding: '12px 0px'}}>
								<label className="label">{ques.nombre}  </label>
								<select name="resp" id={`resp${idx+1}`} className="select">
									<option value="Excelente">Excelente</option>
									<option value="Bueno">Bueno</option>
									<option value="Regular">Regular</option>
									<option value="Malo">Malo</option>
									<option value="Muy-malo">Muy malo</option>
								</select>
							</div>
						</Card>							
					)
				})}
				<Button 
					onClick={this._sendResp}
					color="inherit" 
					style={{ background: '#005f63', color: '#f2f2f2' }}>
					Enviar
				</Button>
				<div>
					<Link
						to="/"
						style={{
							textDecoration: 'none',
							color: '#005f63',
							float: 'right'

						}}>
						Regresar
					</Link>
				</div>
				
			</div>
		);
	}
}

const mapeStateToProps = (state, ownProps) => {
	return {
		user: state.user
	}
}
 
export default withRouter(connect(mapeStateToProps)(Formquestions));