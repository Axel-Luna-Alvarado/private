import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const RowEstablecimientos = ({ id, razon_social, ruc, propietario, actividad, telefono, ubicacion }) => {
    return (
        <tr className="h-16">
            <td className="">{razon_social}</td>
            <td className="">{ruc}</td>
            <td className="">{propietario}</td>
            <td className="">{actividad}</td>
            <td className="">{telefono}</td>
            <td className="">{ubicacion}</td>
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
