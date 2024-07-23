import { Link } from "react-router-dom/dist"
export const TablaReservas = () => {
    return (
        <>
            <span>Lista de Reservas</span>
            <table className="w-11/12">
                <thead className='border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Establecimiento</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Nombres</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Cedula</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Telefono</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Dirección</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Fecha Inicio</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <FileRow id='FIG-069' name='Evento del día del padre' status='Aprobado' priority='Alta' sender='Eduardo' />
                    <FileRow id='FIG-006' name='Documento numero 1' status='Enviado' priority='Media' sender='Eduardo' />
                    <FileRow id='FIG-117' name='Documento numero 3' status='Enviado' priority='Media' sender='Eduardo' /> */}
                    <tr className="h-16">
                        <td>Las Cariñosas</td>
                        <td>Kleber Alexander Aviles Parrales</td>
                        <td><span className="rounded-lg border-2 p-1 me-2 font-semibold">12065810694</span></td>
                        <td><span className="rounded-lg border-2 p-1 font-semibold">0988084761</span></td>
                        <td className=" me-5">Baba, Tinoco</td>
                        <td className="">04/10/2002</td>
                        <td className=" flex items-center">
                            <Link to={'/'} className="mx-3 flex justify-center flex-col items-center mt-2">
                                
                                ver
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}