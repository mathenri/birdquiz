import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class Highscore extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<h1>Highscore</h1>
					<ListGroup>
						<ListGroupItem>Mattias - 50 p</ListGroupItem>
						<ListGroupItem>Annika - 38 p</ListGroupItem>
						<ListGroupItem>Mats - 30 p</ListGroupItem>
						<ListGroupItem>Anna - 29 p</ListGroupItem>
						<ListGroupItem>Klara - 27 p</ListGroupItem>
					</ListGroup>
				</div>
			</div>
		);
	}
}

export default Highscore;