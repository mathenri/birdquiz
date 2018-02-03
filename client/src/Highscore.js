import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Highscore extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<h1>Highscore</h1>
					<ListGroup>
						{this.props.highscore.map((item, i) => 
							<ListGroupItem key={i}>{item.name} - {item.score}</ListGroupItem>)}
					</ListGroup>
				</div>
			</div>
		);
	}
}

export default Highscore;