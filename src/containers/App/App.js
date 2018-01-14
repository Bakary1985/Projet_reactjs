
import React, {Component} from 'react';
import moment from 'moment';
import './App.css';
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';
import Home from '../../containers/Home';

console.log(tweets);

class App extends Component{
	state= {
		tweets,
	}
	publish = (tweet) =>{
		const { tweets} = this.state;

		this.setState({
			tweets: [{
				avatar: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg',
				username: 'Oumar',
				fullname: 'Oumar',
				content: tweet,
				date: moment().format('DD/MM/YYYY'),
			},
				...tweets,
			],
		});
	}
	render(){
		const { tweets} = this.state;
		return(
			<main className="main">
				<TweetBox  publish={this.publish}/>
				{ tweets.map((tweet, index) =>(
					<Tweet 
						key={index}
						{...tweet}
					/>
				))}
			</main>
		);
	}
}

export default App;	



/*import React from 'react';
import './App.css';
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';
import Home from '../../containers/Home';

console.log(tweets);

const App = () => (
	<main className="main">
		<TweetBox />
		{ tweets.map((tweet, index) =>(
			/*<Tweet exemple : 1er methode pour afficher la liste des tweets
				key={index}
				avatar={tweet.avatar}
				fullname={tweet.fullname}
				content={tweet.content}
				date={tweet.date}
			/>*/
			/*<Tweet /*2eme methode pour afficher mes tweets*/
				/*key={index}
				{...tweet}
			/>
		))}
	</main>
);

export default App;	*/