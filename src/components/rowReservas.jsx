import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const RowReservas = ({ id, nombres, establecimiento,inicio, fin, estado, qr }) => {
    return (
        <tr className="h-16">
            <td className="">{nombres}</td>
            <td className="">{establecimiento}</td>
            <td className="">{inicio}</td>
            <td className="">{fin}</td>
            <td className="">{estado}</td>
            <td className=""><a href={"localhost:8310/reserva/qr/" + qr}>{qr}</a></td>
            <td className="flex items-center justify-center">
                <Link to={`/edit/${id}`} className="mx-3 flex justify-center flex-col items-center mt-2">
                    <FaRegEdit size='1.2rem' />
                    Editar
                </Link>
                <button className="mx-3 flex justify-center flex-col items-center mt-2">
                    <MdDelete size='1.2em' />
                    Eliminar
                </button>
            </td>
        </tr>
    );
};
