import React, { useState } from 'react';
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
} from 'react-simple-maps';
import { getData } from '../hooks/getCoordinates';
import Swal from 'sweetalert2';

const geoUrl = "/features.json";

export const MapChart = () => {
	const [data, setData] = useState([]);
	const [elemento, setElemento] = useState(0);

	// const tmp = getData(elemento).then(r => {console.log(r)})
	// setData([...data, tmp]);

	const aumentarElem = async () => {
		await fetchData();
		setElemento(elemento + 1);
	}

		async function fetchData() {
			const res = await getData(elemento);
			console.log(res);
			if (res === 'invalido') {
				Swal.fire('Fin de los datos');
			} else if (res) {
				console.log('todo good');
				setData(d => [...d, res]);
			} else alert('Error de conexión');
		}

	return (
		<div style={{ backgroundColor: 'white', padding: '0 250px' }}>
			<ul className='lista-coordenadas'>
				{data.map((el, index) => {return <li key={index}><h2>{`(${el.Latitud} , ${el.Longitud})`}</h2></li>})}
			</ul>
			<ComposableMap height={500}>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => (
							<Geography key={geo.rsmKey} geography={geo} />
						))
					}
				</Geographies>
				{data.map((el, index) => {
					return (
						<Marker key={index} coordinates={[el.Latitud, el.Longitud]}>
							<circle
								className='animate__animated animate__fadeInDown animate__faster'
								style={{"--animate-duration": "0.5s"}}
								r={4}
								fill='#F53'
							/>
						</Marker>
					);
				})}
			</ComposableMap>
			<button className='btn-coordenadas' onClick={aumentarElem}>
				Agregar coordenada
			</button>
		</div>
	);
};
