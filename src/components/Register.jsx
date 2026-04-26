import { useState } from "react";

function Register(){

//ESTADOS DE INPUT
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmpassword,setConfirmpassword] = useState("")


return(
    <>
    <section className="Register-section">
        <form action="" className="Register">
            <h2>Formulario de Registro</h2>
            <label htmlFor="Email" value = {email} onChange={(e)=>{setEmail(e.target.value)}}>Email</label>
            <br />
            <input type="email" placeholder="ejemplo@ejemplo.com" />
            <br />
            <label htmlFor="Password" value = {password} onChange={(e1)=>{setPassword(e1.target.value)}}>Password</label>
            <br />
            <input type="password" placeholder="******" />
            <br />
            <label htmlFor="Password" value={confirmpassword} onChange={(e2)=>{setConfirmpassword(e2.target.value)}}>Password Confirm</label>
            <br />
            <input type="password" placeholder="******" />
            <br />
           <button type="submit">Register</button>
        </form>
    </section>
    </>
)

}

export default Register;