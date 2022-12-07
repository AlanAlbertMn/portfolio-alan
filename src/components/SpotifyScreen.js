import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Album } from './spotify/Album';

export const SpotifyScreen = () => {
	const [albums, setAlbums] = useState([]);
	const input = useRef();
	const search = e => {
		e.preventDefault();
		const url = `https://spotify23.p.rapidapi.com/search/?q=${input.current.value}`;
		console.log(url);
		axios
			.get(url, {
				headers: {
					'X-RapidAPI-Key':
						'054578f15fmsha377dd3bf8b0500p100c12jsn47d762601f13',
					'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
				},
			})
			.then(response => {
				setAlbums(response.data.albums.items);
			});
	};

	console.log(albums);

	return (
		<form onSubmit={search}>
			<div className='container'>
				<div id='div-busqueda'>
					<input
						id='busqueda'
						placeholder='Introduzca su búsqueda'
						formAction='submit'
						ref={input}
					/>
				</div>
				<h1 style={{ textAlign: 'center' }}>Albums</h1>
				<div className='albums'>
					{albums && albums.map(el => <Album data={el.data} />)}
				</div>
			</div>
		</form>
	);
};
