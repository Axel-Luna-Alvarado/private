import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RowUsuarios } from "../components/rowUsuarios.jsx";

export const TablaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:8310/usuarios');
                setUsuarios(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching usuarios:', error);
            }
        };
        fetchUsuarios();
    }, []);

    return (
        <>
            <span>Lista de Usuarios</span>
            <table className="w-full">
                <thead className='border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3'>Nombres</th>
                        <th className='p-3'>Apellidos</th>
                        <th className='p-3'>Cedula</th>
                        <th className='p-3'>Email</th>
                        <th className='p-3'>Teléfono</th>
                        <th className='p-3'>Dirección</th>
                        <th className='p-3'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <RowUsuarios
                            key={usuario.idusuario}
                            id={usuario.idusuario}
                            nombres={usuario.nombres}
                            apellidos={usuario.apellidos}
                            cedula={usuario.cedula}
                            email={usuario.email}
                            telefono={usuario.telf}
                            direccion={usuario.direccion}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TablaUsuarios;
