import React, { Component } from 'react';
import Header from '../header';
import Features from '../features';
import Coffee from '../coffee';
import Giftset from '../giftset';
import Combo from '../combo';
import Footer from '../footer';

export default class HomePage extends Component {

	render() {

		return (
			<div className="home">
				<Header />
				<Features />
				<Coffee />
				<Giftset />
				<Combo />
				<Footer />
			</div>
		);
	};
};