import React from 'react'
import '../styles/Perfil.css'


function Perfil(props){
    return(
        <div className='content-perfil'>
            <div className='content'>
                <div className='header'>
                    <img className='imagen-perfil' 
                    src={require(`../img/${props.img}.png`)}
                    alt='Foto de brais'/>
                </div>
                <div className='description'>
                    <p className='content-text-perfil'>
                        {props.nombre} en {props.pais}
                    </p>
                    <p className='cargo-perfil'>
                        {props.cargo} en {props.empresa}
                    </p>
                    <p className='resena-perfil'>
                        {props.resena}
                    </p>
                </div>
            </div>
        </div>
    )

};

export default Perfil;