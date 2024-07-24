import { RowReservas } from "../components/rowReservas"

export const TablaReservas = () => {
    return (
        <>
            <span>Lista de Reservas</span>
            <table className="w-full">
                <thead className='border-b-2 border-gray-200'>
                    <tr>
                        <th className='p-3'>Establecimiento</th>
                        <th className='p-3'>Nombres</th>
                        <th className='p-3'>Cedula</th>
                        <th className='p-3'>Telefono</th>
                        <th className='p-3'>Dirección</th>
                        <th className='p-3'>Fecha Inicio</th>
                        <th className='p-3'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <FileRow id='FIG-069' name='Evento del día del padre' status='Aprobado' priority='Alta' sender='Eduardo' />
                    <FileRow id='FIG-006' name='Documento numero 1' status='Enviado' priority='Media' sender='Eduardo' />
                    <FileRow id='FIG-117' name='Documento numero 3' status='Enviado' priority='Media' sender='Eduardo' /> */}
                    {/* Por el momento para ver, luego lo cambias */}

                    <RowReservas id={1} establecimiento={'Las Cariñosas'} nombres={'Kleber Alexander Aviles Parrales'} cedula={'12065810694'} telefono={'0988084761'} direccion={'Baba, Tinoco'} inicio={'04/10/2002'} />
                    <RowReservas id={1} establecimiento={'Motel La Luna'} nombres={'Jazmin Noemi Contreras Anchundia'} cedula={'12065810694'} telefono={'0988084761'} direccion={'Babahoyo, Via Jujan'} inicio={'23/07/2024'} />
                    <RowReservas id={1} establecimiento={'Hotel Gran Paris'} nombres={'Jorge Eduardo Valverde Santillan'} cedula={'1206913830'} telefono={'0988084761'} direccion={'Miami'} inicio={'04/10/2002'} />

                </tbody>
            </table>
        </>
    )
}