import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import logo from '../assets/img/logo.png'
import axios from "axios";

export const SignUp = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post('http://localhost:8310/usuariocliente', data);
            if (response.status === 201) {
                navigate('/')
            }
            console.log(response.status, response.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex  rounded-lg shadow-xl">
                <div className="flex flex-col w-72 items-center bg-red-700 justify-center rounded-l-lg ">
                    <img src={logo} alt="logo-img" className="absolute w-52 h-52" />
                </div>
                <div className="p-16">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-red-700 font-extrabold text-2xl">  CREAR CUENTA </h1>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <LuUsers2 />
                            </span>
                            <select id="lag" {...register('idrol')} className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80">
                                <option value="selecciona">Selecciona el Rol</option>
                                <option value="1">Cliente</option>
                                <option value="2">Administrador</option>
                            </select>
                        </label>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <FaUserPlus />
                            </span>
                            <input type="text" {...register('nombres')} placeholder="Nombres" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                        </label>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <FaUserPlus />
                            </span>
                            <input type="text" {...register('apellidos')} placeholder="Apellidos" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                        </label>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MdNumbers />
                            </span>
                            <input type="number" {...register('cedula')} placeholder="Cedula" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                        </label>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MdEmail />
                            </span>
                            <input type="email"{...register('email')} placeholder="Email" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                        </label>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <LuPhoneCall />
                            </span>
                            <input type="number" {...register('telf')} placeholder="Telefono" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                        </label>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MdOutlineAddHomeWork />
                            </span>
                            <input type="text"{...register('direccion')} placeholder="Direccion" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                        </label>
                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <RiLockPasswordLine />
                            </span>
                            <input type="password" {...register('clave')} placeholder="Contraseña" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" /> <br></br>
                        </label>
                        <br></br>
                        <button className='bg-red-700 text-white w-56 h-10 rounded-lg' type="submit">Registrarse</button>
                    </form>
                    <Link to={'/'}>
                        <span className="text-lg text-stone-400 font-bold">Iniciar sesión</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
