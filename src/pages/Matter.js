import React, { Component } from 'react';
import Adminbar from '../components/navigation/Adminbar';
import { setTeacherByFile } from '../helpers/helper';

import { connect } from 'react-redux';

class Matter extends Component {

	componentDidMount(){
		// console.log(this.props.admin);
	}

	_andleSubmit = (e) => {
		e.preventDefault();
		let file = document.querySelector("input[type='file']");

		let fileData = new FormData();
		fileData.append('file',file.files[0]);

		setTeacherByFile(fileData, this.props.admin.jwt)
			.then(data => {
				console.log(data);
			})
	}
	
	render() { 
		return (
			<div className="page">
				<Adminbar show={this.showMenu} name={this.props.admin.name} />
				<section className="container main">
					<div className="row">
						<div className="col-xs-12">
							<h3>Agregar maestro</h3>
							<form onSubmit={this._andleSubmit}>
								<input type="file" id="file" name="file"/>
								<input type="submit" value="cargar"/>
							</form>
						</div>
					</div>
				</section>
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