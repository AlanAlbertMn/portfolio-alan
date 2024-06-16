import React from 'react';
import whiteLogo from '../assets/LogoAACircNeg.png';

import logo1 from '../assets/htmlLogo.png';
import logo2 from '../assets/cssLogo.png';
import logo4 from '../assets/mongoLogo.png';
import logo5 from '../assets/reactLogo.png';
import logo6 from '../assets/nodeLogo.png';
import logo7 from '../assets/aws_Logo.png';
import polygonSvg from '../assets/low-poly-grid2.svg';

export const Home = () => {
	return (
		<>
			<section className='fluid-section' style={{ backgroundImage: `url(${polygonSvg})` }}>
				<div className='two-divider'>
					{/* <div></div> */}
					<div className='col'>
						<h2>Welcome to Alan Albert's portfolio</h2>
						<br />
						<small>-Alan Albert</small>
					</div>
					<div className='col'>
						<img className='animate__animated animate__fadeIn logoHome' src={whiteLogo} alt="Alan Albert's logo" />
					</div>
				</div>
			</section>
			<section className='fluid-section-alt'>
					<div className='logosDiv'>
						<img src={logo1} alt='logo' className='animate__animated animate__zoomIn codeLogo'/>
						<img src={logo2} alt='logo' className='animate__animated animate__zoomIn animate__delay-1s codeLogo-alt'/>
						<img src={logo4} alt='logo' className='animate__animated animate__zoomIn animate__delay-2s codeLogo'/>
						<img src={logo5} alt='logo' className='animate__animated animate__zoomIn animate__delay-3s codeLogo-alt'/>
						<img src={logo6} alt='logo' className='animate__animated animate__zoomIn animate__delay-4s codeLogo'/>
						<img src={logo7} alt='logo' className='animate__animated animate__zoomIn animate__delay-5s codeLogo-alt'/>
					</div>
			</section>
		</>
	);
};
