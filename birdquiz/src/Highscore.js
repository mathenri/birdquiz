import React, {Component} from 'react';

class Highscore extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<h1>Highscore!</h1>
					<p>{this.props.letter}</p>
				</div>
			</div>
		);
	}
}

export default Highscore;