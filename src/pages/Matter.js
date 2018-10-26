import React, { Component } from 'react';
import Adminbar from '../components/navigation/Adminbar';

import { connect } from 'react-redux';

class Matter extends Component {
	
	render() { 
		return (
			<div className="page">
				<Adminbar show={this.showMenu} name={this.props.admin.name} />
				<section className="container main">
					<div className="row">
						<div className="col-xs-12">
							<h3>Panel de Administración</h3>
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