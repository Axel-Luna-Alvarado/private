import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";
import { TablaReservas } from './tablaRerservas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const PanelAdmin = () => {
    return (
        <>
            <div className='flex h-full w-full flex-col items-center'>
                <div className='flex justify-center items-center w-full bg-red-700 mx-16 h-40'>
                    <img src={logo} alt="" className='m-4 h-32 w-32' />
                    <span className='text-white text-3xl font-serif'>RESERVAS</span>
                </div>
                <div className='flex w-full h-full'>
                    <div className='flex flex-col w-60 bg-red-700'>
                        <ul className='h-full flex flex-col justify-around'>
                            <Link to={'reservas'}>
                                <li className='text-white text-2xl font-serif'>Reservas</li>
                            </Link>
                            <Link>
                                <li className='text-white text-2xl font-serif'>Empresas</li>
                            </Link>
                            <Link>
                                <li className='text-white text-2xl font-serif'>Usuarios</li>
                            </Link>
                        </ul>
                    </div>
                    <div className='w-1/4'>
                        <Routes>
                            <Route path='/reservas' element={<TablaReservas />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}