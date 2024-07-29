import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const RowUsuarios = ({ id, nombres, apellidos, cedula, email, telefono, direccion }) => {
    return (
        <tr className="h-16">
            <td className="">{nombres}</td>
            <td className="">{apellidos}</td>
            <td className="">{cedula}</td>
            <td className="">{email}</td>
            <td className="">{telefono}</td>
            <td className="">{direccion}</td>
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