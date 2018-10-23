import React, { Component } from 'react';
import Appbar from '../components/navigation/Appbar';
import {connect} from 'react-redux';

import Formquestions from '../components/formquestions/FormQuestions';

class Califica extends Component {

	componentDidMount(){
		// console.log(this.props.user);
	}
	
	state = {}
	render() { 
		const { materia } = this.props.match.params;
		return (
			<div className="page">
				<Appbar/>
				<div className="container">
					<div className="row center-xs" style={{ margin: '0' }}>
						<div className="col-sm-12 col-md-8" style={{width: '100%'}}>
							<Formquestions materia={materia} id={this.props.user._id}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps){
	return{
		user: state.user
	}
}
export default connect(mapeStateToProps)(Califica);