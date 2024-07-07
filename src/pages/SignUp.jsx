

import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import logo from '../assets/img/logo.png'

export const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="flex flex rounded-lg shadow-xl">
            <div className="flex flex-col w-72 items-center bg-orange-700 justify-center rounded-l-lg ">
                <img src={logo} alt="logo-img" className="absolute w-52 h-52" />
            </div>
            <div className="p-16">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-orange-700 font-extrabold text-2xl">  CREAR CUENTA </h1>
                    <select name="Rol">
                        <option value="">Ecuador</option>
                        <option value="">COLOMBIA</option>
                    </select>
                    <label className="relative block mt-4 w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaUserPlus />
                        </span>
                        <input type="text" {...register('Nombre')} placeholder="Nombres" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                    </label>
                    <label className="relative block mt-4 w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaUserPlus />
                        </span>
                        <input type="text" {...register('Apellidos')} placeholder="Apellidos" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                    </label>
                    <label className="relative block mt-4 w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdNumbers />
                        </span>
                        <input type="number" {...register('Cedula')} placeholder="Cedula" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                    </label>
                    <label className="relative block mt-4 w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdEmail />
                        </span>
                        <input type="email"{...register('Email')} placeholder="Email" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                    </label>
                    <label className="relative block mt-4 w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <LuPhoneCall />
                        </span>
                        <input type="number" {...register('Telefono')} placeholder="Telefono" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                    </label>
                    <label className="relative block mt-4 w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdOutlineAddHomeWork />
                        </span>
                        <input type="text"{...register('Direccion')} placeholder="Direccion" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                    </label>
                    <label className="relative block mt-4 w-80">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <RiLockPasswordLine />
                        </span>
                        <input type="password" {...register('Contraseña')} placeholder="Contraseña" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" />
                    </label>
                    <select name="Rol" id="">
                        <option value="">Ecuador</option>
                        <option value="">COLOMBIA</option>
                    </select>
                    <br></br>
                    <button className='bg-orange-700 text-white w-56 h-10 rounded-lg' type="submit">Registrarse</button>
                </form>
            </div>
        </div>
    )
}