import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import ResponseForm from './ResponseForm';

class Quiz extends Component {
	constructor() {
		super();
		this.state = {
			isStartButtonHidden: false
		}

		this.toggleStartButtonHidden = this.toggleStartButtonHidden.bind(this);
	}

	toggleStartButtonHidden() {
		this.setState({
			isStartButtonHidden: !this.state.isStartButtonHidden
		});
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col">
						{!this.state.isStartButtonHidden && 
							<Button bsStyle="primary" bsSize="large" onClick={this.toggleStartButtonHidden}>
								Starta Quiz!
							</Button>
						}
					</div>
				</div>

		        <div className="row">
		          <div className="col-sm-6">
		            <h1>{this.props.formatTime(this.props.time)}</h1>
		          </div>
		          <div className="col-sm-6">
		            <h1 className="pull-right">{this.props.nrCorrectAnswers}</h1>
		          </div>
		        </div>

		        <div className="row content-container center-block">
		          <div className="col">
		            <Image src={require(`${this.props.currentBirdImageFilePath}`)} responsive />
		          </div>
		        </div>
		        <div className="row form-container center-block">
		          <div className="col">
		            <ResponseForm handleSubmit={this.props.handleSubmit} 
		                          usersAnswer={this.props.usersAnswer} 
		                          handleChange={this.props.handleChange} />
		          </div>
		        </div>
	        </div>
		);
	}

}

export default Quiz;