import React from 'react';
import './detection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Detection = () => {
	return (
		<div className="detection-container">
			<div className="model-loading">
				<FontAwesomeIcon icon={faSpinner} /> <p>Model is loading</p>
			</div>
			<div className="resulte-container">
				<p>Negative or Positive</p>
			</div>
			<div className="report-container">
				<p>The details of the report is here</p>
			</div>
		</div>
	);
};
