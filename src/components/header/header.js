import React, { Component } from 'react';
import RevoLogo from './revo-logo.png';
import CartImg from './cart.png';
import { HashLink as Link } from 'react-router-hash-link';

import './header.css';

export default class Header extends Component {

	render() {

		return (
			<header className="header">
				<div className="container header__container">
					<div className="header__inner">
						<Link to="/#"><img src={RevoLogo} className="header__logo" alt="revo logo" /></Link>
						<Link to="/#"><img src={CartImg} className="header__cart-img" alt="shopping cart" /></Link>
						<h1 className="header__title">Your<br /><span>PERSONALIZED</span><br />COFFEE</h1>
						<nav className="header__nav">
							<Link to="/#" className="header__nav-item">TRANG CHỦ</Link>
							<Link to="/#" className="header__nav-item">COFFEE</Link>
							<Link to="/#" className="header__nav-item">PHIN MẠ MÀU</Link>
							<Link to="/#" className="header__nav-item">COMBO PHIN PHÊ</Link>
							<Link to="/#" className="header__nav-item">GIFTSET</Link>
							<Link to="/#" className="header__nav-item">LIÊN HỆ</Link>
						</nav>
					</div>
				</div>
			</header>
		);
	}
};
