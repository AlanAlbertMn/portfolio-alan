import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaEdit, FaTrash, FaUndoAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

export const Pendientes = () => {
    const [pendientes, setPendientes] = useState([]);
    const [errorLocal, setError] = useState("")
    const pendiente = useRef()

    async function getPendientes() {
        axios.get('http://localhost:4000/pendientes')
            .then((response) => {
                setPendientes(response.data)
            })
            .catch(error => {
                setError(error.message)
            });
    }

    useEffect(() => {
        getPendientes();
    }, []);

    const submitPendiente = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/pendientes', { name: pendiente.current.value, estado: "PENDING" }).then(() => getPendientes())
        pendiente.current.value = '';
    }

    const deletePendiente = (elemento) => {
        console.log(elemento);
        Swal.fire({
            title: `Are you sure you want to delete '${elemento.name}'?`,
            text: "This pending will be gone forever.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f00',
            cancelButtonColor: '',
            confirmButtonText: 'Yes, delete'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4000/pendientes/${elemento._id}`).then(() => getPendientes())
                Swal.fire(
                    'Deleted',
                    'This pending has been deleted.',
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
            title: `${elemento.name} completed`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    const desacompletarPendiente = (elemento) => {
        axios.put(`http://localhost:4000/pendientes/desacompletar/${elemento._id}`).then(() => getPendientes())
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${elemento.name} marked as pending`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    console.log(pendientes);

    return (
        <form onSubmit={submitPendiente}>
            <div className='container-pendientes'>
                <input className='inputPendiente' disabled={errorLocal.length} placeholder='Enter the title of the pending here' formAction='submit' ref={pendiente}></input>
                {pendientes.length > 0 ? (
                    pendientes.map((el, index) => (
                        <div className={`pendiente ${el.estado === 'PENDING' ? 'pending' : el.estado === 'EN PROGRESO' ? 'ongoing' : 'done'}`} key={index}>
                            <h1 id='pendiente-name'>{el.name}</h1>
                            <div className='stateAndButtons center'>
                                <h1>{el.estado}</h1>
                                <div className='icons'>
                                    <FaCheck id='icon' onClick={() => terminarPendiente(el)} />
                                    <FaEdit id='icon' />
                                    <FaUndoAlt id='icon' onClick={() => desacompletarPendiente(el)} />
                                    <FaTrash onClick={() => deletePendiente(el)} id='icon' />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <h1 className='center-text'>There is nothing pending</h1>
                )}
            </div>
        </form>
    );
};
