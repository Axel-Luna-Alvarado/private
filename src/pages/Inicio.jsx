import logo from '../assets/img/logo.png'

const Inicio = () => {
  return (
    <div className="reservas-container d-flex justify-content-center align-items-center w-full h-full">
      <div className="text-center text-white">
        <div className="reservas-logo-container mb-3">
        <img src={logo} alt="logo-img" className="reservas-logo" />
        </div>
        <h3 className="reservas-subtitulos">DESCUBRE NUESTRAS RESERVAS</h3>
        <h1 className="reservas-titulo">Bienvenido a Reservas</h1>
        <h3 className="reservas-subtulos text-center">GESTIÓN EFICIENTE DE RESERVAS</h3>
        <button className="btn btn-light mt-7 reservas-button">Reservar</button>
      </div>
    </div>
  );
};

export default Inicio;