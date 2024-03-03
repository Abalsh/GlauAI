import React from 'react';
import './about.css';

export const About = () => {
	return (
		<div className="about-container">
			<h1>What is GlauAI?</h1>
			<div className="about-section-container">
				<div className="about-1">
					<img
						className="about-img"
						src="https://burjeel.com/wp-content/uploads/2022/06/shutterstock_593311505-scaled.jpg"
						alt=""
					/>
					<p className="about-p">
						Our AI model is the result of extensive research, development, and collaboration among our team
						of dedicated university students. By training the model on large datasets of eye images and
						utilizing advanced algorithms, we have created a sophisticated system capable of analyzing and
						interpreting these images with remarkable accuracy. Our model takes into account various
						diagnostic factors, including optic nerve appearance, visual field tests, and intraocular
						pressure measurements, to provide a comprehensive and reliable assessment of glaucoma.
					</p>
				</div>
				<div className="about-2">
					<img
						className="about-img"
						src="https://www.advvisioncenters.com/wp-content/uploads/2019/12/doctor-ophthalmologist-is-checking-eye-vision-of-woman.jpg"
						alt=""
					/>
					<p className="about-p">
						The primary objective of our specific model is to enhance the accuracy of glaucoma diagnosis.
						Through rigorous testing and validation, we have fine-tuned our model to achieve exceptional
						performance in identifying early signs of glaucoma and distinguishing them from other eye
						conditions. By providing more accurate diagnoses, we aim to empower healthcare professionals
						with a powerful tool that can aid in early intervention and treatment, ultimately improving
						patient outcomes and preserving precious vision.
					</p>
				</div>
				<div className="about-3">
					<img
						className="about-img"
						src="https://www.alweeam.com.sa/wp-content/uploads/2023/07/%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-%D8%AC%D8%AF%D8%A9-%D9%88%D8%B7%D8%B1%D9%82-%D8%A7%D9%84%D8%AA%D8%B3%D8%AC%D9%8A%D9%84-%D9%81%D9%8A-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9.jpg"
						alt=""
					/>
					<p className="about-p">
						We are proud to present our senior project, a culmination of our passion, knowledge, and
						commitment to making a positive impact in the field of ophthalmology. We invite you to explore
						our website, learn more about the project, and witness the potential of AI in revolutionizing
						glaucoma diagnosis. Together, let us strive towards a future where early detection and precise
						diagnoses pave the way towards better eye health and improved quality of life for individuals
						affected by glaucoma.
					</p>
				</div>
			</div>
		</div>
	);
};
