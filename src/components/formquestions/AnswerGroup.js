import React, { Component } from 'react';

import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

class Answers extends Component {
	state = {
		value: 'excelente'
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};
	
	render() { 
		return (
			<RadioGroup
				style={{ display: 'inline-block' }}
				onChange={this.handleChange}
				value={this.state.value}>
				<FormControlLabel
					value="excelente"
					control={<Radio color="secondary" />}
					label="Excelente"
				/>
				<FormControlLabel
					value="bueno"
					control={<Radio color="secondary" />}
					label="Bueno"
				/>
				<FormControlLabel
					value="regular"
					control={<Radio color="secondary" />}
					label="Regular"
				/>
				<FormControlLabel
					value="malo"
					control={<Radio color="secondary" />}
					label="Malo"
				/>
				<FormControlLabel
					value="muy-malo"
					control={<Radio color="secondary" />}
					label="Muy malo"
				/>
			</RadioGroup>
		);
	}
}
 
export default Answers;