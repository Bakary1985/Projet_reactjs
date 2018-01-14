import React, { Component, propTypes } from 'react';
import PropTypes from 'prop-types';
import './TweetBox.css'
import './TweetBox';

class TweetBox extends Component{

	static propTypes = {
		//publish: propTypes.func.isRequired,
	}

	state={
		value: '',
	};
	handleChange = ({target: { value } }) =>{
		this.setState({ value })
	};

	handleSubmit = () => {
		const {value} = this.state;
		const {publish} = this.props;

		if (value.lenght && value.lenght <= 140) {
			publish(value);

			this.setState =({value: ''})
		}
	}

	render() {	
		const { value } = this.state;
		console.log('render');
		return(
			<div className="tweeboxTextarea">
				<textarea
					row={3}
					placeholder="composer votre tweet"
					value = {value}
					className={value.length > 140 && 'alert'}
					onChange={this.handleChange}
				/>
				<div className="action">
				<span className="count">{140 - value.length}</span>
				<button 
				disabled={!value.length || value.length > 140} 
				onClick={this.handleSubmit}
				>Poster</button>
				</div>
			</div>
		);
	}
}

export default TweetBox;