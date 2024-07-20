import { useForm } from "react-hook-form";
import { RiUserReceived2Line } from "react-icons/ri";
import { RiUserAddLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import axios from "axios";
import logo from '../assets/img/logo.png'

export const Reserva = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        /* console.log(data); */
        try {
            const response = await axios.post('to do', data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return(

        <div className="flex items-center justify-center h-full">
            <div className="flex  rounded-lg shadow-xl">
                <div className="flex-col w-72 items-center bg-red-700 justify-center rounded-l-lg ">
                    <img src={logo} alt="logo-img" className="absolute w-52 h-52" />
                </div>

<div>
<label  className="text-red-700 font-extrabold text-2xl"> REGISTRA TU RESERVA</label>

<form onSubmit={handleSubmit(onSubmit)}>

                           <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                              <RiUserReceived2Line />
                            </span>
     <input type="text" {...register('Reserva')} placeholder="Reserva" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" /> <br></br>
      </label>

      <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                               <RiUserAddLine />
                            </span>
                            <input type="text" {...register('Usuario')} placeholder="Usuario" required className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80" /> <br></br>
                            </label>
      

      <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                              <RiArrowRightDoubleLine />
                            </span>
      <select name="Establecimiento" id="lang" className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80">
        <option value="selecciona">Establecimiento</option>
        <option value="Cliente">Cliente</option>
        <option value="Administrador">Administrador</option>
      </select> <br></br>
      </label>

      <label className="relative block mt-4 w-80">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                              <RiArrowRightDoubleLine />
                            </span>
      <select name="Estado" id="lang" className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80">
        <option value="selecciona">Estado</option>
        <option value="Cliente">Activo</option>
        <option value="Administrador">Pasivo</option>
      </select>
      </label>


      <h1>FECHA INICIO</h1>
<input type="date" {...register('Fecha Inicio')} placeholder="Fecha Inicio"  className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80"/>
<br></br>

<h1>FECHA FIN</h1>
<input type="date" {...register('Fecha Fin')} placeholder="Fecha Fin" className="placeholder:text-bold block py-2 pl-9 pr-3 shadow-sm sm:text-sm bg-stone-200 w-80"/>
<br></br>



<button className='bg-red-700 text-white w-56 h-10 rounded-lg' type="submit">RESERVAR</button>

</form>
</div>
</div>
            </div>
    
    )

}
export default Reserva