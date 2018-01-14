
import React from 'react';
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
			<Tweet /*2eme methode pour afficher mes tweets*/
				key={index}
				{...tweet}
			/>
		))}
	</main>
);

export default App;	