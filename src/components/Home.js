import React from 'react';
import logo from '../assets/logo.png';

export const Home = () => {
	return (
		<>
			<section className='fluid-section'>
				<div className='two-divider'>
					<div></div>
					<div className='col'>
						<h1>¡Bienvenido a mi portafolio personal!</h1>
						<br />
						<h4>
							Aquí colocaré links a proyectos y demos de proyectos que he
							realizado con los cuales podrás darte una idea de lo que puedo
							ofrecerte
						</h4>
					</div>
					<div className='col'>
						<img src={logo} alt="Alan Albert's logo" />
					</div>
				</div>
			</section>
			<section id='two' className='fluid-section'>
				<div className='two-divider'>
					<div></div>
					<div className='col'>
						<h1>¡Bienvenido a mi portafolio personal!</h1>
						<br />
						<h4>
							Aquí colocaré links a proyectos y demos de proyectos que he
							realizado con los cuales podrás darte una idea de lo que puedo
							ofrecerte
						</h4>
					</div>
					<div className='col'>
						<img src={logo} alt="Alan Albert's logo" />
					</div>
				</div>
			</section>
		</>
	);
};
