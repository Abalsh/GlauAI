import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
	const [ id, setId ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:3000/login', { id, password })
			.then((result) => {
				if (result.data === 'success') {
					navigate('/dashboard');
				} else if (result.data === 'Password is not correct') {
					setErrorMessage('Password is not correct');
				} else if (result.data === 'Invalid ID') {
					setErrorMessage('Invalid ID');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<div>
					<h1>Welcome to GlauAI</h1>
				</div>
				{errorMessage && <p className="error-message">{errorMessage}</p>}
				<div className="input-container">
					<label htmlFor="ID">Username</label>
					<input
						type="text"
						id="ID"
						placeholder="Enter your ID"
						value={id}
						onChange={(e) => setId(e.target.value)}
					/>
				</div>
				<div className="input-container">
					<label htmlFor="pass">Password</label>
					<input
						type="password"
						id="pass"
						placeholder="Enter your Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="button-container">
					<button>Login</button>
				</div>
			</form>
		</div>
	);
};
