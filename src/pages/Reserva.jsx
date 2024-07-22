import { useForm } from "react-hook-form";
import { LuUser } from "react-icons/lu";
import { LuUserPlus } from "react-icons/lu";
import axios from "axios";
import logo from '../assets/img/logo.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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

  return (
    <>
      <div className="flex w-3/4 h-96 flex-col rounded-t-lg justify-center ">
        <div className="bg-red-700 w-full p-16 justify-center items-center flex rounded-t-lg">
          <img src={logo} alt="" />
        </div>
        <div>
          <form action="" className="flex flex-col justify-center items-center">
            <span className="text-red-700 font-bold text-3xl my-7">
              REGISTRA TU RESERVA
            </span>
            <div className="flex w-full justify-around items-center justify-center">
              <div className="flex flex-col w-2/4 items-center">
                <label className="relative block my-6 w-96 h-16">
                  <span className="absolute inset-y-0 left-0 flex items-center">
                    <LuUser size={50} color="grey" />
                  </span>
                  <input className="placeholder:text-bold placeholder:text-2xl focus:outline-none block font-medium pl-12 pr-3 shadow-sm sm:text-sm bg-stone-200 w-96 h-16" placeholder="RESERVA" type="text" name="" />
                </label>

                <label className="relative block my-6 w-96 h-16">
                  <span className="absolute inset-y-0 left-0 flex items-center">
                    <MdKeyboardDoubleArrowRight size={50} color="grey" />
                  </span>
                  <input className="placeholder:text-bold placeholder:text-2xl focus:outline-none block font-medium pl-12 pr-3 shadow-sm sm:text-sm bg-stone-200 w-96 h-16" placeholder="ESTABLECIMIENTO" type="text" name="" />
                </label>

                <label className="relative block my-6 w-96 h-16">
                  <span className="absolute inset-y-0 left-0 flex items-center">
                    <MdKeyboardDoubleArrowRight size={50} color="grey" />
                  </span>
                  <input className="placeholder:text-bold placeholder:text-2xl focus:outline-none block font-medium pl-12 pr-3 shadow-sm sm:text-sm bg-stone-200 w-96 h-16" placeholder="FECHA INICIO" type="date" name="" />
                </label>
              </div>
              <div className="flex flex-col w-2/4 items-center">
                <label className="relative block my-6 w-96 h-16">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <LuUserPlus size={50} color="grey" />
                  </span>
                  <input className="placeholder:text-bold placeholder:text-2xl focus:outline-none block font-medium pl-16 pr-3 shadow-sm sm:text-sm bg-stone-200 w-96 h-16" placeholder="USUARIO" type="text" name="" />
                </label>

                <label className="relative block my-6 w-96 h-16">
                  <span className="absolute inset-y-0 left-0 flex items-center">
                    <MdKeyboardDoubleArrowRight size={50} color="grey" />
                  </span>
                  <input className="placeholder:text-bold placeholder:text-2xl focus:outline-none block font-medium pl-12 pr-3 shadow-sm sm:text-sm bg-stone-200 w-96 h-16" placeholder="ESTADO" type="text" name="" />
                </label>

                <label className="relative block my-6 w-96 h-16">
                  <span className="absolute inset-y-0 left-0 flex items-center">
                    <MdKeyboardDoubleArrowRight size={50} color="grey" />
                  </span>
                  <input className="placeholder:text-bold placeholder:text-2xl focus:outline-none block font-medium pl-12 pr-3 shadow-sm sm:text-sm bg-stone-200 w-96 h-16" placeholder="FECHA FIN" type="date" name="" />
                </label>
              </div>
            </div>
            <button type="submit" className="bg-red-700 text-white text-2xl h-12 font-medium w-72 rounded-lg">
              RESERVAR
            </button>
          </form>
        </div>
      </div>
    </>


  )

}
export default Reserva