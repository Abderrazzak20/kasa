import React from 'react'
import "./PageNotFound.css"
import Navbar from '../components/Navbar/Navbar'
import Main from '../layout/Main/Main'
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer/Footer'

function PageNotFound() {
    return (
        <>
            <Main>
                <Navbar />

                <div className="Informations">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                    <Link to="/" className='ToHome'>Retourner sur la page d’accueil</Link>
                </div>
            </Main>
   
        </>
    )
}

export default PageNotFound