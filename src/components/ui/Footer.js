import React from 'react';
import logoCirc from '../../assets/LogoAASF.png';

export const Footer = () => {
	return (
		<section id='footer'>
			<div className='container two-divider-footer'>
				<div className='col'>
					<h5 className='small-title'>Acerca de mí</h5>
					<div className='img-text'>
						<img src={logoCirc} alt='logo Alan Albert' height='40px' />
						<p className='paragraph'>
							Soy un desarrollador con experiencia en Javascript para el
							desarrollo de front-ends con React y back-ends con Node.js
						</p>
					</div>
				</div>
				<div className='col'>
					<h5 className='small-title'>Contacto</h5>
					<div className='img-text'>
						<p className='paragraph'>Próximamente...</p>
					</div>
				</div>
			</div>
		</section>
	);
};
