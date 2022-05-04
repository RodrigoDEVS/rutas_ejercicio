import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Register = () => {
    return (
        <div>
            <div className='container'>
                <h1>Registro de Usuario</h1>
                <RegisterForm />
            </div>
            <div className='mt-2'>
                <Button variant="secondary"><Link to={'/'} className='btn' style={{color: 'white'}} >Volver al Inicio</Link></Button>
            </div>
        </div>
    )
}

export default Register