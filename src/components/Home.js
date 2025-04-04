import React from 'react';
import alanPicture from '../assets/alanPicture.jpeg';

import logo1 from '../assets/htmlLogo.png';
import logo2 from '../assets/cssLogo.png';
import logo4 from '../assets/mongoLogo.png';
import logo5 from '../assets/reactLogo.png';
import logo6 from '../assets/nodeLogo.png';
import logo7 from '../assets/aws_Logo.png';
import logo8 from '../assets/python-logo.png';

import { FaAddressCard } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";

import rawgScreenshot from '../assets/rawgscreenshot.png';
import dcolorScreenshot from '../assets/dcolorscreenshot.png';
import spotifyScreenshot from '../assets/spotifyScreenshot.png';

import polygonSvg from '../assets/low-poly-grid2.svg';
import { goToContact } from '../helpers/goToContact';

export const Home = () => {
	return (
		<>
			<section className='fluid-section' style={{ backgroundImage: `url(${polygonSvg})` }}>
				<div className='two-divider'>
					<div className='col animate__animated animate__fadeInLeft' id='bio'>
						<h1 className='title'>Welcome to my portfolio!</h1>
						<p className='paragraph'>
							My name is Alan Albert and I am a software engineer with 3.8 years of experience in the full stack industry.
							Very adept in JavaScript and its frameworks such as React and Node.js.
						</p>
						{/* <p className='paragraph'>
							Worked with agile methodologies within projects that required sudden
							changes along my career. Team-player but responsible and capable of delivering tasks by himself.
						</p> */}
						<p className='paragraph'>
							Travel ahead to find some of my projects!
						</p>
					</div>
					<div className='col'>
						<img id='alanImg' className='animate__animated animate__fadeInRight logoHome' src={alanPicture} alt="Alan Albert's logo" />
					</div>
				</div>
			</section>
			<section id='three-cols' className='flex fluid-section-alt'>
				<div className='box' onClick={goToContact}>
					<div className='two-divider'>
						<FaAddressCard className='icon'/>
						<h1 className='subtitle bold'>CONTACT</h1>
					</div>
					<p>
						Feel free to give me a call to ask more about my expertise and abilities
					</p>
				</div>
				<div className='box'>
				<div className='two-divider'>
					<GrProjects className='icon'/>
					<h1 className='subtitle bold'>PROJECTS</h1>
				</div>
					<p>
						Feel free to give me a call to ask more about my expertise and abilities
					</p>
				</div>
				<div className='box'>
				<div className='two-divider'>
					<VscPreview className='icon'/>
					<h1 className='subtitle bold'>BACKGROUND</h1>
				</div>
					<p>
						Explore more of my career, where I display my experience and the projects I have been involved in
					</p>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='spotifyDiv'>
					<div className='col'>
						<h1 className='bold'>Spotify App</h1>
						<p className='paragraph'>
							Spotify app was developed consuming a third party API that provides real Spotify data.
							A personal token was added into the environment variables to consume the API.
							The front-end was developed completely from scratch.
						</p>
						<div className='repoDivider'>
							<a className='bold' target="_blank" href='https://github.com/AlanAlbertMn/spotify-app' rel="noreferrer">Repository</a>
							<a className='bold' target="_blank" href='https://alanalbertmn.github.io/spotify-app/' rel="noreferrer">Live demo</a>
						</div>
					</div>
					<div className='col'>
						<img className='screenshot' alt='spotify Screenshot' src={spotifyScreenshot} />
					</div>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='videogameDiv'>
					<div className='col'>
						<img className='screenshot' alt='Rawg site screenshot' src={rawgScreenshot} />
					</div>
					<div className='col'>
						<h1 className='bold'>RAWG App</h1>
						<p className='paragraph'>
							This app was developed consuming a third party API that provides real Spotify data.
							A personal token has been added into the environment variables to consume the API.
							Besides the information from the API's database, the front-end was developed personally.
						</p>
						<div className='repoDivider'>
							<a className='bold' target="_blank" href='http://www.github.com/SpotifyApp' rel="noreferrer">Repository</a>
							<a className='bold' target="_blank" href='http://www.github.com/spotifyrunningpage' rel="noreferrer">Live demo</a>
						</div>
					</div>
				</div>
			</section>
			<section className='projects flex'>
				<div className='two-divider' id='dcolorDiv'>
					<div className='col'>
						<h1 className='bold'>D-Color (e-catalog)</h1>
						<p className='paragraph'>
							This app was developed consuming a third party API that provides real Spotify data.
							A personal token has been added into the environment variables to consume the API.
							Besides the information from the API's database, the front-end was developed personally.
						</p>
						<div className='repoDivider'>
							<a className='bold' target="_blank" href='http://www.github.com/SpotifyApp' rel="noreferrer">Repository</a>
							<a className='bold' target="_blank" href='http://www.github.com/spotifyrunningpage' rel="noreferrer">Live demo</a>
						</div>
					</div>
					<div className='col'>
						<img className='screenshot' alt='D-color project screenshot' src={dcolorScreenshot} />
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
		</>
	);
};
