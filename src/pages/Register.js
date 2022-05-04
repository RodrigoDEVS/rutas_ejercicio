import React from 'react'
import RegisterForm from '../components/RegisterForm'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div>
        <h1>Registro de Usuario</h1>
        <RegisterForm/>
        <Link to={'/'} className='btn-primary'>Volver al Inicio</Link>
    </div>
  )
}

export default Register