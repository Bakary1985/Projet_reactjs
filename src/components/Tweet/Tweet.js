import React from 'react';
import './Tweet.css';

const Tweet = ({ avatar, fullname, content, username, date}) => (
	<div className="Tweet">
		<div className="avatar">
			<img className="img_avatar" src={avatar} role="presentation" alt="avatar"/>
		</div>
		<div className="data">
			<div className="infos">
				<strong>{fullname}</strong>
				<strong>{username}</strong>
			</div>
			<div className="content">
				<p>{content}</p>
				<p>{date}</p>
			</div>
		</div>
	</div>
);


export default Tweet;