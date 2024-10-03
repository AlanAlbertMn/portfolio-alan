import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaCheck, FaEdit, FaTrash, FaUndoAlt } from 'react-icons/fa';
import { IoIosAdd } from "react-icons/io";
import Swal from 'sweetalert2';

export const Pendientes = () => {
    const [pendientes, setPendientes] = useState([]);
    const [errorLocal, setError] = useState("")
    const [emptyInput, setEmptyInput] = useState(false)
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
        if (pendiente.current.value) {
            setEmptyInput(false)
            axios.post('http://localhost:4000/pendientes', { name: pendiente.current.value, estado: "PENDING" }).then(() => getPendientes())
            pendiente.current.value = '';
        } else {
            setEmptyInput(true)
        }
    }

    const deletePendiente = (elemento) => {
        Swal.fire({
            title: `Are you sure you want to delete '${elemento.name}'?`,
            text: "This pending will be gone forever.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'darkred',
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
        if (elemento.estado !== 'DONE') {
            axios.put(`http://localhost:4000/pendientes/completar/${elemento._id}`).then(() => getPendientes())
            Swal.fire({
                icon: 'success',
                title: `${elemento.name} completed`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const desacompletarPendiente = (elemento) => {
        if (elemento.estado !== 'PENDING') {
            axios.put(`http://localhost:4000/pendientes/desacompletar/${elemento._id}`).then(() => getPendientes())
            Swal.fire({
                icon: 'success',
                title: `${elemento.name} marked as pending`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <form onSubmit={submitPendiente}>
            <div className='container-pendientes'>
                <div className='inputEnter'>
                    <input className='inputPendiente' 
                           disabled={errorLocal.length} 
                           placeholder='Enter the title of the pending here'
                           onChange={() => {pendiente.current.value !== '' && setEmptyInput(false)}}
                           formAction='submit' 
                           ref={pendiente}/>
                    <button className='enterIcon'><IoIosAdd id='icon' type='submit' size={50}></IoIosAdd></button>
                    {emptyInput && <div className='error'><h2>You must fill in the title before submitting</h2></div>}
                </div>
                {pendientes.length > 0 ?
                    <div id='pending-list'>
                        {
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
                        } </div> : (
                        <h1 className='center-text'>There is nothing pending</h1>
                    )}
            </div>
        </form>
    );
};
