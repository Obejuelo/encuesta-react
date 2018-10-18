import React, { Component } from 'react';
import Appbar from '../components/navigation/Appbar';

import Formquestions from '../components/formquestions/FormQuestions';

class Califica extends Component {
	
	state = {}
	render() { 
		const { maestro, materia } = this.props.match.params;
		return (
			<div>
				<Appbar/>
				<div className="container">
					<div className="row center-xs">
						<div className="col-xs-12 col-sm-12 col-md-8">
							<Formquestions maestro={maestro} materia={materia}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Califica;