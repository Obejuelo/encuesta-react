import React, { Component } from 'react';
import Adminbar from '../components/navigation/Adminbar';
import { setTeacherByFile, getTeacher, setTeacher, deleteTeacher } from '../helpers/helper';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import Formfile from '../components/formquestions/FormFile';
import Modalform from '../components/modal/Modalform';
import Modalconfirm from '../components/modal/ModalConfirm';
import Paginate from '../components/paginate/Paginate';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Matter extends Component {
	
	token = this.props.admin.jwt;

	state = {
		teachers:[],
		data: [],
		total:'',
		id:''
	}

	componentDidMount(){
		this.getTeacher();
	}

	_andleSubmit = (e) => {
		e.preventDefault();
		let file = document.querySelector("input[type='file']");

		let fileData = new FormData();
		fileData.append('file',file.files[0]);

		setTeacherByFile(fileData, this.props.admin.jwt)
			.then(data => {
				this.setState({teachers: data})
			})
	}

	getTeacher = () => {
		getTeacher().then(data => {
			this.setState({ total: data.total })
			this.setState({ data: data.docs })
		})
	}

	_setTeacher = () => {
		return new Promise((response, reject) => {
			let total = this.state.teachers.length;
			this.state.teachers.forEach((teach, idx) => {
				idx++;
				let body = {
					clave: teach.Clave,
					nombre: teach.Nombre
				}

				setTeacher(body, this.token)
					.then(() => {
						if(total === idx){
							response('datos enviados');
							this.props.history.push('/matter')
						}
					})
			})
		})
	}

	result = async () => {
		let response = await this._setTeacher();
		console.log(response);
	}

	_setTeacherOne = async (body) => {
		let data = this.state.data;
		let resp = await setTeacher(body, this.token)
		data.push(resp);
		this.setState({data})
	}

	_deleteTeacher = async () => {
		let id = this.state.id;
		await deleteTeacher(id, this.token)
		
		// let data = await getTeacher();
		// this.setState({ data: data.docs })
		await this.setState(state => ({
			data: state.data.filter(
				item => item._id !== id
			),
		}));
	} 

	_clearId = () => {
		this.setState({id: ''});
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

	_showConfirm = (id) => {
		let modal = document.querySelector('.modal-confirm');
		let cardForm = document.querySelector('.cardForm-confirm');
		let contentModal = document.querySelector('.content-confirm');
		modal.style.display = 'block';
		cardForm.style.display = 'block';
		contentModal.style.display = 'flex';
		modal.style.animation = '.3s fadeIn 1';
		cardForm.style.animation = '.3s show 1';

		this.setState({id: id})
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
				<TransitionGroup className="todo-list">
				{this.state.data.map((teacher, idx) => {
					return (
					<CSSTransition
						key={idx}
						timeout={500}
						classNames="fade"
					>
					<li style={{
							listStyle: 'none',
							borderBottom: 'solid 1px rgba(0,0,0,0.4)',
							textAlign: 'left'
						}}>
						{teacher.clave} - {teacher.nombre}

						<span style={{float:'right'}} className="edit">
							<i className="far fa-trash-alt" onClick={() => {this._showConfirm(teacher._id)}}></i>
							<i className="far fa-edit"></i>
						</span>
					</li>
					</CSSTransition>)
				})
				}
				</TransitionGroup>
				<Paginate pages={this.state.total}/>
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
								send={this.result}
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
				<Modalconfirm delete={this._deleteTeacher} clear={this._clearId}/>
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