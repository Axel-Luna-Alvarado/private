import { useState } from "react"
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import logo from '../assets/img/logo.png'

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user) //Imprime para comprobar datos
    }

    return (
        <>
            <div className="flex rounded-lg shadow-xl">
                <div className="flex flex-col h-96 w-48 items-center justify-center">
                    <div className="w-full h-2/4 bg-orange-700 rounded-l-lg">
                    </div>
                    <img src={logo} alt="logo-img" className="absolute w-40 h-40" />
                    <div className="w-full h-2/4 bg-orange-100 rounded-s-lg">
                    </div>
                </div>
                <div className="px-16">
                    <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
                        <h1 className="text-orange-700 font-extrabold text-3xl">RESERVAS</h1>
                        <h2 className="text-lg text-stone-400 font-bold">Ingrese usuario y contraseña</h2>

                        <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <FaRegUser />
                            </span>
                            <input className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" onChange={handleChange} placeholder="USUARIO" type="text" name="email" />
                        </label>

                        <label className="relative block my-6 w-80">
                            <span className="sr-only">Search</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <RiLockPasswordFill />
                            </span>
                            <input className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" onChange={handleChange} placeholder="CONTRASEÑA" type="password" name="password" />
                        </label>

                        <button type="submit" className="text-white bg-orange-700 w-40 h-10 rounded-lg font-bold">INGRESAR</button><br></br>

                        <a href="#" className="text-lg text-stone-400 font-bold"> Registrese ahora</a>

                    </form>
                </div>
            </div>
        </>
    )
}