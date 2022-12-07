import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaEdit, FaTrash, FaUndoAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

export const Pendientes = () => {
	const [pendientes, setPendientes] = useState([]);
    const pendiente = useRef()

    async function getPendientes() {
        axios
            .get('http://localhost:4000/pendientes')
            .then(response => setPendientes(response.data));
    }
	useEffect(() => {
		getPendientes();
	}, []);

    const submitPendiente = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/pendientes', {name: pendiente.current.value, estado: "PENDIENTE"}).then(() => getPendientes())
        pendiente.current.value = '';
    }
    
    const deletePendiente = (elemento) => {
        console.log(elemento);
        Swal.fire({
            title: `¿Seguro de que quieres borrar '${elemento.name}'?`,
            text: "Se perderá para siempre el pendiente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4000/pendientes/${elemento._id}`).then(() => getPendientes())
                Swal.fire(
                'Borrado!',
                'El pendiente se ha eliminado.',
                'success'
              )
            }
          })
    }

    const terminarPendiente = (elemento) => {
        axios.put(`http://localhost:4000/pendientes/completar/${elemento._id}`).then(() => getPendientes())
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${elemento.name} completado`,
            showConfirmButton: false,
            timer: 1500
          })
    }
    
    const desacompletarPendiente = (elemento) => {
        axios.put(`http://localhost:4000/pendientes/desacompletar/${elemento._id}`).then(() => getPendientes())
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${elemento.name} marcado como pendiente`,
            showConfirmButton: false,
            timer: 1500
          })
    }

	console.log(pendientes);

	return (
        <form onSubmit={submitPendiente}>

		<div className='container-pendientes'>
            <input className='inputPendiente' placeholder='Ingresa tu pendiente aquí' formAction='submit' ref={pendiente}></input>
			{pendientes ? (
                pendientes.map((el, index) => (
                    <div className={`pendiente ${el.estado === 'PENDIENTE' ? 'pending' : el.estado === 'EN PROGRESO' ? 'ongoing' : 'done'}`} key={index}>
						<h1 id='pendiente-name'>{el.name}</h1>
						<h1>{el.estado}</h1>
						<div className='icons'>
							<FaCheck id='icon' onClick={() => terminarPendiente(el)}/>
							<FaEdit id='icon'/>
							<FaUndoAlt id='icon' onClick={() => desacompletarPendiente(el)}/>
							<FaTrash onClick={() => deletePendiente(el)} id='icon'/>
						</div>
					</div>
				))
			) : (
                <h1>No hay pendientes</h1>
                )}
		</div>
                </form>
	);
};
