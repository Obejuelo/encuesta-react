import React, { Component } from 'react';

class Paginate extends Component {
	state = {  }

	componentDidMount(){
		console.log(this.props.pages)
	}

	render() { 
		return (
			<div className="paginate">
				<div className="span">1</div>
				<div className="span">2</div>
				<div className="span">3</div>
				<div className="span">4</div>
			</div>
		);
	}
}
 
export default Paginate;