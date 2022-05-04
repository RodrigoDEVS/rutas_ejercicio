import React from 'react'
import {Button} from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div>
        <h1>Pagina de Inicio</h1>
        <Button variant="primary" href='/registro'>Registrar Usuario</Button>{' '}
    </div>
  )
}

export default LandingPage