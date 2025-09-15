import React from 'react';
import { FaLinkedinIn, FaMailBulk, FaPhone } from 'react-icons/fa';
import logoCirc from '../../assets/LogoAASF.png';

export const Footer = () => {
	return (
		<footer id='footer'>
			<div className='two-divider-footer'>
					<div className='two-divider'>
						<img id='logo' src={logoCirc} alt='logo Alan Albert' height='40px' />
						<p className='paragraph'>
							Full Stack Engineer specialized on React and Node.js, AWS, SQL
						</p>
				</div>
				<div className='col flex redes'>
					<div className='img-text'>
						<FaLinkedinIn />
						<a
							href='https://www.linkedin.com/in/alan-rodrigo-albert-mor%C3%A1n-81764714a/'
							target='_blank'
							rel='noreferrer'
						>
							Alan Albert
						</a>
					</div>
					<div className='img-text'>
						<FaPhone />
						<a href='tel:+522227769031'>(+52) 222 776 9031</a>
					</div>
					<div className='img-text'>
						<FaMailBulk />
						<a href='mailto:someone@example.com'>alanalbertmn@gmail.com</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
