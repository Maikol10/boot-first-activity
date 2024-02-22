import React from 'react'
import '../styles/Perfil.css'
import Contador from './Contador';


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
                <div className='button-content'>
                    <button onClick={()=>window.open(props.linkedin, '_blank')}>
                        Seguir en linkedin 
                        <Contador/>
                    </button>
                    <button onClick={()=>window.open(props.youtube, '_blank')}>
                        Seguir en Youtube
                        <Contador/>
                    </button>
                    <button onClick={()=>window.open(props.instagram, '_blank')}>
                        Seguir en Instagram
                        <Contador/>
                    </button>
                </div>
            </div>
        </div>
    )

};

export default Perfil;