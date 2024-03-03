import React from 'react';
import { Link } from 'react-router-dom';
import './upimage.css';

export const Upimage = () => {
	return (
		<div className="upimage-container">
			<div className="page-header">
				<h1>
					Glau<span>AI</span>
				</h1>
				<p>Glaucoma Detection AI Model</p>
			</div>
			<div className="upimage">
				<p>+Upload an Image</p>
				<Link to="/Login" className="button">
					Start a detection
				</Link>
			</div>
			<Link to="/About">What is GlauAI?&#8594;</Link>
		</div>
	);
};
