import React, { Component } from 'react';
import {connect} from 'react-redux';

import Adminbar from '../components/navigation/Adminbar';

class Administrator extends Component {

	componentDidMount(){
		// console.log(this.props.admin);
	}

	render() { 
		return (
			<div className="page" style={{width: '100%'}}>
				<Adminbar/>
			</div>
		);
	}
}

function mapeStateToProps(state, ownProps){
	return {
		admin: state.user
	}
}
export default connect(mapeStateToProps)(Administrator);