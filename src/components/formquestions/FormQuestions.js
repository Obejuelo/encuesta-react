import React, { Component } from 'react';
import { getQuestion } from '../../helpers/helper';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

import Answers from './AnswerGroup';

class Formquestions extends Component {

	state = {
		questions: []
	}

	componentDidMount(){
		getQuestion().then(data => {
			this.setState({questions: data})
		})
	}

	_sendForm(){
		let answer = document.querySelectorAll('.label');
		
		console.log(answer[0].lastChild);
	}

	render() { 
		return (
			<form style={{ textAlign: 'center', width: '100%', margin: '30px 0'}}>
				{this.state.questions.map((question, idx) => {
					return(
						<FormControl key={question._id} style={{width: '100%'}} className={`label`}>
							<FormLabel>{question.nombre}</FormLabel>
							<Answers quest={question.nombre} send={this._sendForm}/>
						</FormControl>
					)
				})}
				<Button
					onClick={this._sendForm}
					variant="contained"
					style={{ marginBottom: '10px', background: '#006064', color: '#fff' }}>
					Enviar
				</Button>
			</form>
		);
	}
}
 
export default Formquestions;