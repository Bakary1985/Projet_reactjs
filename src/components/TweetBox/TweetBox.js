import React, { Component } from 'react';

import './TweetBox.css'
import './TweetBox';

class TweetBox extends Component{

	state={
		value: '',
	};
	handleChange = ({target: { value } }) =>{
		this.setState({ value })
	};

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
				disabled={!value.length || value.length > 140} >Poster</button>
				</div>
			</div>
		);
	}
}

export default TweetBox;