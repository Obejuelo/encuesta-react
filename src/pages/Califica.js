import React, { Component } from 'react';
import Appbar from '../components/navigation/Appbar';

import Formquestions from '../components/formquestions/FormQuestions';

class Califica extends Component {
	
	state = {}
	render() { 
		// console.log(this.props.match.params);
		const { maestro, materia } = this.props.match.params;
		return (
			<div>
				<Appbar/>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col md-10">
							{/* <h1 style={{textAlign: 'center'}}>Formulario de preguntas</h1> */}
							<Formquestions/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Califica;