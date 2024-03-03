import React from 'react';
import './footer.css';

export const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-about-glauai">
					<h2>GlauAI</h2>
					<p>GlauAI is an AI model built by SEU students</p>
				</div>
				<div className="nav">
					<ul className="footer-nav-links">
						<h3>Links</h3>
						<li className="footer-nav-link">
							<a href="">Home</a>
						</li>
						<li className="footer-nav-link">
							<a href="">Dashbard</a>
						</li>
						<li className="footer-nav-link">
							<a href="">About</a>
						</li>
					</ul>
					<ul className="about">
						<h3>Links</h3>
						<li className="footer-nav-link">
							<a href="">Home</a>
						</li>
						<li className="footer-nav-link">
							<a href="">Dashbard</a>
						</li>
						<li className="footer-nav-link">
							<a href="">About</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="footer-copyrights">&copy;All rights reserved for SEU 2023</div>
		</div>
	);
};
