import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Upimage } from './components/upimage/upimage';
import { About } from './components/about/about';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Detection } from './components/detection/detection';

function App() {
	return (
		<BrowserRouter>
			<div>
				<div className="gradient-bg" />
				<Header />
				<Routes>
					<Route path="/" element={<Upimage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/about" element={<About />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/detection" element={<Detection />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
