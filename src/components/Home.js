import React from 'react';
import alanPicture from '../assets/alanPicture.jpeg';

import logo1 from '../assets/htmlLogo.png';
import logo2 from '../assets/cssLogo.png';
import logo4 from '../assets/mongoLogo.png';
import logo5 from '../assets/reactLogo.png';
import logo6 from '../assets/nodeLogo.png';
import logo7 from '../assets/aws_Logo.png';
import logo8 from '../assets/python-logo.png';

import rawgScreenshot from '../assets/rawgscreenshot.png';
import dcolorScreenshot from '../assets/dcolorscreenshot.png';
import spotifyScreenshot from '../assets/spotifyScreenshot.png';

import polygonSvg from '../assets/low-poly-grid2.svg';

export const Home = () => {
	return (
		<>
			<section className='fluid-section' style={{ backgroundImage: `url(${polygonSvg})` }}>
				<div className='two-divider'>
					<div className='col animate__animated animate__fadeInLeft'>
						<h1>Welcome to my portfolio!</h1>
						<br />
						<p className='paragraph'>
							My name is Alan Albert and I am a software engineer with 3.5 years of experience in full stack engineering.
							Very adept in JavaScript and its frameworks such as React and Node.js. Past member of the release engineering team
							for a financial services platform and main developer on a leading company in the financial and insurance industry,
							as well as in the restaurant industry.
						</p>
						<p>
							Worked with agile methodologies within projects that required sudden
							changes along my career. Team-player but responsible and capable of delivering tasks by himself.
							Former lover of challenges and complex problems, as some of my hobbies include wood-working, hard videogames and puzzles.
						</p>
						<p className='paragraph'>
							Travel ahead to find some of my projects!
						</p>
					</div>
					<div className='col'>
						<img id='alanImg' className='animate__animated animate__fadeInRight logoHome' src={alanPicture} alt="Alan Albert's logo" />
					</div>
				</div>
			</section>
			<section className='fluid-section-alt'>
				<h1 className='topTechs'>Languages and technologies</h1>
				<div className='logosDiv'>
					<img src={logo1} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse codeLogo' />
					<img src={logo2} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-1s codeLogo-alt' />
					<img src={logo4} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-2s codeLogo' />
					<img src={logo5} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-3s codeLogo-alt' />
					<img src={logo6} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-4s codeLogo' />
					<img src={logo7} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-5s codeLogo-alt' />
					<img src={logo8} alt='logo' className='animate__animated animate__repeat-3 animate__slow animate__pulse animate__delay-5s codeLogo' />
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='spotifyDiv'>
					<div className='col'>
						<h1>Spotify App</h1>
						<p className='paragraph'>
							This app was developed consuming a third party API that provides real Spotify data.
							A personal token has been added into the environment variables to consume the API.
							Besides the information from the API's database, the front-end was developed personally.
						</p>
						<div className='repoDivider'>
							<small>
								<a target="_blank" href='http://www.github.com/SpotifyApp'>Repository</a>
							</small>
							<small>
								<a target="_blank" href='http://www.github.com/spotifyrunningpage'>Live demo</a>
							</small>
						</div>
					</div>
					<div className='col'>
						<img className='screenshot' src={spotifyScreenshot}/>
					</div>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='videogameDiv'>
					<div className='col'>
						<img className='screenshot' src={rawgScreenshot}/>
					</div>
					<div className='col'>
						<h1>RAWG App</h1>
						<p className='paragraph'>
							This app was developed consuming a third party API that provides real Spotify data.
							A personal token has been added into the environment variables to consume the API.
							Besides the information from the API's database, the front-end was developed personally.
						</p>
						<div className='repoDivider'>
							<small>
								<a target="_blank" href='http://www.github.com/SpotifyApp'>Repository</a>
							</small>
							<small>
								<a target="_blank" href='http://www.github.com/spotifyrunningpage'>Live demo</a>
							</small>
						</div>
					</div>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='dcolorDiv'>
					<div className='col'>
						<h1>D-Color (e-catalog)</h1>
						<p className='paragraph'>
							This app was developed consuming a third party API that provides real Spotify data.
							A personal token has been added into the environment variables to consume the API.
							Besides the information from the API's database, the front-end was developed personally.
						</p>
						<div className='repoDivider'>
							<small>
								<a target="_blank" href='http://www.github.com/SpotifyApp'>Repository</a>
							</small>
							<small>
								<a target="_blank" href='http://www.github.com/spotifyrunningpage'>Live demo</a>
							</small>
						</div>
					</div>
					<div className='col'>
						<img className='screenshot' src={dcolorScreenshot}/>
					</div>
				</div>
			</section>
		</>
	);
};
