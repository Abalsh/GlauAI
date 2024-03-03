import React from 'react';
import { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
	const [ scrolled, setScrolled ] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`header ${scrolled ? 'scrolled' : ''}`}>
			<div className="website-name">
				Glau<span>AI</span>
			</div>
			<div className="nav">
				<ul className="nav-links">
					<li className="nav-link">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-link">
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li className="nav-link">
						<Link to="/about">About</Link>
					</li>
					<li className="nav-link sign-in">
						<Link to="/login">Sign in</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
