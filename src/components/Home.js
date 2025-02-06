import React from 'react';
import alanPicture from '../assets/alanPicture.jpeg';

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
					<div className='col animate__animated animate__fadeInLeft'>
						<h1>Welcome to my portfolio!</h1>
						<br />
						<p>My name is Alan Albert and Software engineer with 3.5 years of experience in full stack engineering, 
							very adept in JavaScript and its frameworks such as React and Node, part of the release engineering team 
							for a financial services platform and main developer on a leading company in the financial and insurance, 
							as well as in the restaurant industry. Worked with agile methodologies within projects that required sudden 
							changes along his career. Knows how to be a team-player and is also responsible enough to deliver tasks by himself. 
							Analytic and problem-solver, also has a pending plan for creating videogames in Unity.</p>
					</div>
					<div className='col'>
						<img id='alanImg' className='animate__animated animate__fadeInRight logoHome' src={alanPicture} alt="Alan Albert's logo" />
					</div>
				</div>
			</section>
			<section className='fluid-section-alt'>
				<h1 className='topTechs'>Top technologies</h1>
					<div className='logosDiv'>
						<img src={logo1} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse codeLogo'/>
						<img src={logo2} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-1s codeLogo-alt'/>
						<img src={logo4} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-2s codeLogo'/>
						<img src={logo5} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-3s codeLogo-alt'/>
						<img src={logo6} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-4s codeLogo'/>
						<img src={logo7} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-5s codeLogo-alt'/>
					</div>
			</section>
		</>
	);
};
