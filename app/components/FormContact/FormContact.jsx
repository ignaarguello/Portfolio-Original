'use client'
import React, { useState } from 'react';
import '../../styles/styles.css'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function FormContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://formspree.io/f/xdornyee', {
                name,
                email,
                message,
            });
            //Aca manejamos la respuesta en caso 'Exitoso'
            Swal.fire({
                title: `Email enviado con exito.`,
                text: 'Ignacio ya recibió tu correo',
                icon: 'success',
            })
            alert('Mail enviado')
        } catch (error) {
            //Aca manejamos la respuesta en caso de 'Error'
            Swal.fire({
                title: `Ocurrio un error`,
                text: `Ha ocurrido un error: ${error.message}`,
                icon: 'error',
            })
        }
    };

    return (
        <form onSubmit={handleSubmit} id='form-contact__Home-P4'>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensaje"
            ></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}

