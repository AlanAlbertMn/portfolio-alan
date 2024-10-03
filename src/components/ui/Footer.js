import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import logoCirc from '../../assets/LogoAASF.png';

export const Footer = () => {
	return (
		<section id='footer'>
			<div className='two-divider-footer'>
				<div className='col'>
					<h5 className='small-title'>About me</h5>
					<div className='img-text'>
						<img src={logoCirc} alt='logo Alan Albert' height='40px' />
						<p className='paragraph'>
							Full Stack Engineer specialized on React and Node.js
						</p>
					</div>
				</div>
				<div className='col redes'>
					<h5 className='small-title'>Contact</h5>
					<div className='img-text'>
						<FaLinkedin />
						<a
							href='https://www.linkedin.com/in/alan-rodrigo-albert-mor%C3%A1n-81764714a/'
							target='_blank'
							rel='noreferrer'
							className='paragraph'
						>
							Alan Albert
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
