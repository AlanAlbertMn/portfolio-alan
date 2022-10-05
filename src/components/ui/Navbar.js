import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

export const Navbar = () => {
	const [linksDisplay, setLinksDisplay] = useState(false);

	const linksDisplayClick = () => {
		setLinksDisplay(!linksDisplay);
	};	

	return (
		<div className='nav-container'>
			<div className='options flex center'>
				<GiHamburgerMenu
					className='pointer nav-item'
					size={30}
					onClick={linksDisplayClick}
				/>
				<Link id='home' to='/home'>
					<FaHome className='nav-item' size={30} />
				</Link>
			</div>
			{linksDisplay && (
				<div id='links'>
					<Link className='nav-text-link' to='/proyectos'>
						Proyectos
					</Link>
				</div>
			)}
			<div>
				<Link to='/home'>
				<img id='logo' src={logo} alt='Portfolio Logo' />
				</Link>
			</div>
			<div className='options flex center'>
				<Link id='contacto' className='nav-text-link' to={{pathname:'/home', hash:'#footer'}}>
					CONTACTO
				</Link>
			</div>
		</div>
	);
};
