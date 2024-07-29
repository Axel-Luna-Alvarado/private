import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RowEstablecimientos } from "../components/rowEstablecimientos.jsx";

export const TablaEstablecimientos = () => {
    const [establecimientos, setEstablecimientos] = useState([]);

    useEffect(() => {
        const fetchEstablecimientos = async () => {
            try {
                const response = await axios.get('http://localhost:8310/establecimientos');
                setEstablecimientos(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching establecimientos:', error);
            }
        };
        fetchEstablecimientos();
    }, []);

    return (
        <>
            <span>Lista de Establecimientos</span>
            <table className="w-full">
                <thead className='border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3'>Razón Social</th>
                        <th className='p-3'>RUC</th>
                        <th className='p-3'>Propietario</th>
                        <th className='p-3'>Actividad</th>
                        <th className='p-3'>Teléfono</th>
                        <th className='p-3'>Ubicación</th>
                        <th className='p-3'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {establecimientos.map(establecimiento => (
                        <RowEstablecimientos
                            key={establecimiento.idestablecimiento}
                            id={establecimiento.idestablecimiento}
                            razon_social={establecimiento.razon_social}
                            ruc={establecimiento.ruc}
                            propietario={establecimiento.propietario}
                            actividad={establecimiento.actividad}
                            telefono={establecimiento.telefono}
                            ubicacion={establecimiento.ubicacion}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TablaEstablecimientos;
