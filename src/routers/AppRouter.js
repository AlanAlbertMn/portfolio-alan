import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { MapChart } from '../components/MapChart';
import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
	// const {state} = useContext(MyContext);
	// const isLogged = true;

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/mapchart' element={<MapChart />} />
				<Route path='/home' element={<Home />} />
				<Route path='*' element={<Navigate to='/home' />} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	);
};
