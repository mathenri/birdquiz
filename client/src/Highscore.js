import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Highscore extends Component {
	formatDate(date) {
		return date.toISOString().slice(0, 10);
	}

	render() {
		return (
			<div className="row">
				<div className="col">
					<h1>Highscore</h1>
					<ListGroup>
						{this.props.highscore.map((item, i) => 
							<ListGroupItem key={i}>{item.name} - {item.score} - {this.props.formatTime(item.time)} - {this.formatDate(item.date)}</ListGroupItem>)}
					</ListGroup>
				</div>
			</div>
		);
	}
}

export default Highscore;