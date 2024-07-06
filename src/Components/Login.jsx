import React from 'react';
import './Login.css'
export const Login =() => {
 

    return(

<div class="wrapper">
 <form action="">

<h1>RESERVAS</h1>
<h2>Ingrese usuario y contraseña</h2>

<div class="input-box">
<input type="text" placeholder="USUARIO" required />
<br></br>
</div>


<div class="input-box">
<input type="password" placeholder="CONTRASEÑA" required/>
<br></br>
</div>

    <button type="submit" class="btn">INGRESAR</button><br></br>

<div class="register-link">
<a href="#"> Registrese ahora</a>
</div>


</form>

</div>

)
}