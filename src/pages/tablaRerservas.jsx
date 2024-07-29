import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RowReservas } from "../components/rowReservas.jsx";

export const TablaReservas = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const fetchReservas = async () => {
            try {
                const response = await axios.get('http://localhost:8310/reservaciones');
                setReservas(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching reservas:', error);
            }
        };
        fetchReservas();
    }, []);

    return (
        <>
            <span>Lista de Reservas</span>
            <table className="w-full">
                <thead className='border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3'>Establecimiento</th>
                        <th className='p-3'>Nombres</th>
                        <th className='p-3'>Fecha Inicio</th>
                        <th className='p-3'>Fecha Fin</th>
                        <th className='p-3'>Estado</th>
                        <th className='p-3'>QR</th>
                        <th className='p-3'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map(reserva => (
                        <RowReservas
                            key={reserva.id_reserva}
                            id={reserva.id_reserva}
                            nombres={reserva.idusuario} // Necesitarás mapear `idusuario` a nombres reales
                            establecimiento={reserva.idestablecimiento} // Necesitarás mapear `idestablecimiento` a nombres reales
                            inicio={new Date(reserva.fechainicio).toLocaleDateString()}
                            fin={new Date(reserva.fechafin).toLocaleDateString()}
                            estado={reserva.estado}
                            qr={reserva.qr}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TablaReservas;
