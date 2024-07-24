import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


export const RowReservas = ({ id, establecimiento, nombres, telefono, direccion, cedula, inicio }) => {
    return (
        <tr className="h-16">
            <td className="">{establecimiento}</td>
            <td className="">{nombres}</td>
            <td className="">{cedula}</td>
            <td className="">{telefono}</td>
            <td className="">{direccion}</td>
            <td className="">{inicio}</td>
            <td className=" flex items-center justify-center">
                <Link to={'/'} className="mx-3 flex justify-center flex-col items-center mt-2">
                    <FaRegEdit size='1.2rem' />
                    Editar
                </Link>
                <Link className="mx-3 flex justify-center flex-col items-center mt-2">
                    <MdDelete size='1.2em' />
                    Eliminar
                </Link>
            </td>
        </tr>
    );
}