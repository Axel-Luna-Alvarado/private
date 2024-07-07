import React from "react"
export const Registro =() => {

return(
    
<div>


<form>


<h1>  CREAR CUENTA </h1>


<select name="Rol">
<option value="">Ecuador</option>
<option value="">COLOMBIA</option>
</select>

<input type="text" placeholder="Nombres" required /> 
<input type="text" placeholder="Apellidos" required />
<input type="number" placeholder="Cedula" requiredc/>
<input type="email" placeholder="Email" required /> 
<input type="number" placeholder="Telefono" required />
<input type="text" placeholder="Direccion" required/>
<input type="password" placeholder="Contraseña" required />

<select name="Rol"id="">
<option value="">Ecuador</option>
<option value="">COLOMBIA</option>
</select>
<br></br>

<input type="submit" class="btn" value="Registrarse"/>


</form>

</div>




)


}