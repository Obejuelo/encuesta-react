import React, { Component } from 'react';
import Adminbar from '../components/navigation/Adminbar';
import { setTeacherByFile, getTeacher, setTeacher } from '../helpers/helper';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import Formfile from '../components/formquestions/FormFile';
import Modalform from '../components/modal/Modalform';
import Modalconfirm from '../components/modal/ModalConfirm';

class Matter extends Component {
	
	token = this.props.admin.jwt;

	state = {
		teachers:[],
		data: []
	}

	componentDidMount(){
		setTimeout(() => {
			console.log(this.state.data.length);
			
		}, 1000);
		this.getTeacher();
	}

	_andleSubmit = (e) => {
		e.preventDefault();
		let file = document.querySelector("input[type='file']");

		let fileData = new FormData();
		fileData.append('file',file.files[0]);

		setTeacherByFile(fileData, this.props.admin.jwt)
			.then(data => {
				// console.log(data);
				this.setState({teachers: data})
			})
	}

	getTeacher = () => {
		getTeacher().then(data => {
			this.setState({ data: data.docs })
		})
	}

	_setTeacher = async () => {
		this.state.teachers.forEach(teach => {
			let body = {
				clave: teach.Clave,
				nombre: teach.Nombre
			}
			
			setTeacher(body, this.token)
				.then(data => {
					console.log('ok');
				})
		})
	}

	_setTeacherOne = async (body) => {
		let resp = await setTeacher(body, this.token)

		console.log(resp);
	}

	_showModal = () => {
		let modal = document.querySelector('.modal');
		let cardForm = document.querySelector('.cardForm');
		let contentModal = document.querySelector('.content-modal');
		modal.style.display = 'block';
		cardForm.style.display = 'block';
		contentModal.style.display = 'flex';
		modal.style.animation = '.3s fadeIn 1';
		cardForm.style.animation = '.3s show 1';
	}

	_showConfirm = () => {
		let modal = document.querySelector('.modal-confirm');
		let cardForm = document.querySelector('.cardForm-confirm');
		let contentModal = document.querySelector('.content-confirm');
		modal.style.display = 'block';
		cardForm.style.display = 'block';
		contentModal.style.display = 'flex';
		modal.style.animation = '.3s fadeIn 1';
		cardForm.style.animation = '.3s show 1';
	}

	_renderName = () => {
		return (
			<Card className="card-teacher">
			<h3 style={{textAlign: 'center', margin: '0 0 10px 0'}}>Excel file</h3>
				{this.state.teachers.map((teacher, idx) => {
					return (<li key={idx}
						style={{
							listStyle: 'none',
							borderBottom: 'solid 1px rgba(0,0,0,0.4)',
							marginBottom: '10px',
							textAlign: 'left'
						}}>
						{teacher.Clave} - {teacher.Nombre}
					</li>)
				})
				}
			</Card>
		)
	}

	renderDB = () => {
		return(
			<Card className="card-teacher teach-card">
				<h3 style={{ textAlign: 'center', margin: '0 0 10px 0' }}>Registros en la base de datos</h3>
				{this.state.data.map((teacher, idx) => {
					return (<li key={idx}
						style={{
							listStyle: 'none',
							borderBottom: 'solid 1px rgba(0,0,0,0.4)',
							marginBottom: '10px',
							textAlign: 'left'
						}}>
						{teacher.clave} - {teacher.nombre}

						<span style={{float:'right'}} className="edit">
							<i className="far fa-trash-alt" onClick={this._showConfirm}></i>
							<i className="far fa-edit"></i>
						</span>
					</li>)
				})
				}
			</Card>
		)
	}
	
	render() {
		return (
			<div className="page">
				<Adminbar show={this.showMenu} name={this.props.admin.name} />
				<section className="container main">
					<div className="row center-xs middle-xs" style={{ margin: '5px' }}>
						<div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
							<Formfile 
								file={this._andleSubmit} 
								teach={this.state.teachers} 
								send={this._setTeacher}
								modal={this._showModal}/>
						</div>
						<div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
							{this.state.teachers.length !== 0 ? this._renderName() : ''}
							{this.state.data.length !== 0 ? this.renderDB() : ''}
							<h3 style={{ float: 'left !important' }}>Total: {this.state.teachers.length}</h3>
						</div>
					</div>
				</section>
				<Modalform sendOne={this._setTeacherOne}/>
				<Modalconfirm/>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps) {
	return {
		admin: state.user
	}
}
export default connect(mapeStateToProps)(Matter);