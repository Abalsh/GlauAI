import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Dashboard = ({ userType }) => {
	const [ name, setName ] = useState();
	const [ id, setId ] = useState();
	const [ address, setAddress ] = useState();
	const [ department, setDepartment ] = useState();
	const [ doctor, setDoctor ] = useState();
	const [ eyeImage, setEyeImage ] = useState();
	const [ doctors, setDoctors ] = useState([]);
	const [ patiants, setPatiants ] = useState([]);
	const [ nurses, setNurses ] = useState([]);
	const [ showForm, setShowForm ] = useState(false);
	const [ showImage, setShowImage ] = useState(false);
	const navigate = useNavigate();
	const [ errorMessage, setErrorMessage ] = useState('');
	const [ userInfo, setUserInfo ] = useState(null);

	useEffect(() => {
		axios
			.get('http://localhost:3000/getinfo')
			.then((response) => {
				const user = response.data.users.find((user) => user.id === userId);
				setUserInfo(user);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !id || !address || !department || !doctor || !eyeImage) {
			setErrorMessage('Please fill in all fields');
		}

		axios
			.post('http://localhost:3000/dashboard', { name, id, address, department, doctor, eyeImage })
			.then((result) => {
				if ((result.data === name, id, address, department, doctor, eyeImage)) {
					setShowForm(false);
				}
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		axios
			.get('http://localhost:3000/getinfo')
			.then((response) => {
				setDoctors(response.data.doctors);
				setPatiants(response.data.patiants);
				setNurses(response.data.nurses);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleEnterPatiant = () => {
		setShowForm(true);
	};

	const handleimageret = () => {
		setShowImage(true);
	};
	const handlestartdetection = () => {
		navigate('/detection');
	};

	return (
		<div className="dashboard-container">
			<div>
				<h1>Patiants</h1>
				<button onClick={handleEnterPatiant} className="patiant-entry-btn">
					Enter New Patiant
				</button>
				<div className="doctors-container">
					{patiants.map((patiant) => (
						<div className="doctor" key={patiant.id}>
							<div className="doctor-info">
								<div>
									<div>
										<FontAwesomeIcon icon={faCircleUser} className="person-icon" />
									</div>
									<div>
										<p className="doctor-name">{patiant.name}</p>
										<p className="doctor-id">ID: {patiant.id}</p>
										<p className="doctor-room">Doctor: {patiant.doctor}</p>
									</div>
								</div>
								<div className="address-info">
									<p>{patiant.address}</p>
									<p>Riyadh, Saudi Arabia</p>
									<p>Insurance NO: 2346547</p>
								</div>
							</div>
							<div className="additional-info">
								<p>Department: Ophthalmology</p>
								<p>
									Fundus Image:
									<button className="retrieve-btn" onClick={handleimageret}>
										Retrieve
									</button>
								</p>
							</div>
						</div>
					))}
				</div>

				{showImage && (
					<div className="overlay">
						<div className="login-container">
							<div className="close-btn" onClick={() => setShowImage(false)}>
								X
							</div>
							<img
								className="fundus-img"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Fundus_photograph_of_normal_right_eye.jpg/1200px-Fundus_photograph_of_normal_right_eye.jpg"
								alt=""
							/>
							<div className="button-container">
								<button onClick={handlestartdetection}>Start Detection</button>
							</div>
						</div>
					</div>
				)}

				{showForm && (
					<div className="overlay">
						<form onSubmit={handleSubmit} className="patiant-entry-container">
							<div className="close-btn" onClick={() => setShowForm(false)}>
								X
							</div>
							<div>
								<h1>Patiant Info</h1>
							</div>
							{errorMessage && <p className="error-message">{errorMessage}</p>}
							<div className="input-field">
								<div className="input-container">
									<label htmlFor="name">Patiant Name</label>
									<input
										type="text"
										id="nameff"
										placeholder="Enter your ID"
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="ID">ID</label>
									<input
										type="text"
										id="ID"
										placeholder="Enter your ID"
										onChange={(e) => setId(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="address">Address</label>
									<input
										type="text"
										id="address"
										placeholder="Enter your ID"
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="department">Department</label>
									<input
										type="text"
										id="department"
										placeholder="Enter your ID"
										onChange={(e) => setDepartment(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="doctor">Doctor</label>
									<input
										type="text"
										id="doctor"
										placeholder="Enter your ID"
										onChange={(e) => setDoctor(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="eyeimage">Eye Image</label>
									<input
										type="text"
										id="eyeimage"
										placeholder="Enter your ID"
										onChange={(e) => setEyeImage(e.target.value)}
									/>
								</div>
							</div>

							<div className="button-container">
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				)}
			</div>

			<div>
				<h1>Doctors</h1>
				<div className="doctors-container">
					{doctors.map((doctor) => (
						<div className="doctor" key={doctor.id}>
							<div className="doctor-info">
								<div>
									<div>
										<FontAwesomeIcon icon={faCircleUser} className="person-icon" />
									</div>
									<div>
										<p className="doctor-name">{doctor.name}</p>
										<p className="doctor-id">ID: {doctor.id}</p>
										<p className="doctor-room">Room: {doctor.Room}</p>
									</div>
								</div>
								<div className="address-info">
									<p>{doctor.address}</p>
									<p>Riyadh, Saudi Arabia</p>
								</div>
							</div>
							<div className="additional-info">
								<p>Department: {doctor.department}</p>
							</div>
						</div>
					))}
				</div>

				<h1>Nurses</h1>
				<div className="doctors-container">
					{nurses.map((nurse) => (
						<div className="doctor" key={nurse.id}>
							<div className="doctor-info">
								<div>
									<div>
										<FontAwesomeIcon icon={faCircleUser} className="person-icon" />
									</div>
									<div>
										<p className="doctor-name">{nurse.name}</p>
										<p className="doctor-id">ID: {nurse.id}</p>
										<p className="doctor-room">Doctor: {nurse.doctor}</p>
									</div>
								</div>
								<div className="address-info">
									<p>{nurse.address}</p>
									<p>Riyadh, Saudi Arabia</p>
								</div>
							</div>
							<div className="additional-info">
								<p>Department: {nurse.department}</p>
								<p>Notes:</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div>
				<h1>Patiants</h1>
				<button onClick={handleEnterPatiant} className="patiant-entry-btn">
					Enter New Patiant
				</button>
				<div className="doctors-container">
					{patiants.map((patiant) => (
						<div className="doctor" key={patiant.id}>
							<div className="doctor-info">
								<div>
									<div>
										<FontAwesomeIcon icon={faCircleUser} className="person-icon" />
									</div>
									<div>
										<p className="doctor-name">{patiant.name}</p>
										<p className="doctor-id">ID: {patiant.id}</p>
										<p className="doctor-room">Doctor: {patiant.doctor}</p>
									</div>
								</div>
								<div className="address-info">
									<p>{patiant.address}</p>
									<p>Riyadh, Saudi Arabia</p>
									<p>Insurance NO: 2346547</p>
								</div>
							</div>
							<div className="additional-info">
								<p>Department: Ophthalmology</p>
								<p>
									Fundus Image:
									<button className="retrieve-btn" onClick={handleimageret}>
										Retrieve
									</button>
								</p>
							</div>
						</div>
					))}
				</div>

				{showImage && (
					<div className="overlay">
						<div className="login-container">
							<div className="close-btn" onClick={() => setShowImage(false)}>
								X
							</div>
							<img
								className="fundus-img"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Fundus_photograph_of_normal_right_eye.jpg/1200px-Fundus_photograph_of_normal_right_eye.jpg"
								alt=""
							/>
							<div className="button-container">
								<button onClick={handlestartdetection}>Start Detection</button>
							</div>
						</div>
					</div>
				)}

				{showForm && (
					<div className="overlay">
						<form onSubmit={handleSubmit} className="patiant-entry-container">
							<div className="close-btn" onClick={() => setShowForm(false)}>
								X
							</div>
							<div>
								<h1>Patiant Info</h1>
							</div>
							{errorMessage && <p className="error-message">{errorMessage}</p>}
							<div className="input-field">
								<div className="input-container">
									<label htmlFor="name">Patiant Name</label>
									<input
										type="text"
										id="nameff"
										placeholder="Enter your ID"
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="ID">ID</label>
									<input
										type="text"
										id="ID"
										placeholder="Enter your ID"
										onChange={(e) => setId(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="address">Address</label>
									<input
										type="text"
										id="address"
										placeholder="Enter your ID"
										onChange={(e) => setAddress(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="department">Department</label>
									<input
										type="text"
										id="department"
										placeholder="Enter your ID"
										onChange={(e) => setDepartment(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="doctor">Doctor</label>
									<input
										type="text"
										id="doctor"
										placeholder="Enter your ID"
										onChange={(e) => setDoctor(e.target.value)}
									/>
								</div>
								<div className="input-container">
									<label htmlFor="eyeimage">Eye Image</label>
									<input
										type="text"
										id="eyeimage"
										placeholder="Enter your ID"
										onChange={(e) => setEyeImage(e.target.value)}
									/>
								</div>
							</div>

							<div className="button-container">
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				)}
			</div>
		</div>
	);
};
