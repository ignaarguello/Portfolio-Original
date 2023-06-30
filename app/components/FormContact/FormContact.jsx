'use client'
import React, { useState } from 'react';
import '../../styles/styles.css'
import axios from 'axios';

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
            alert('Mail enviado')
        } catch (error) {
            alert(error)
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

