import 'react'
import { useState } from 'react';
import './Presentacion_02.css';

import foto from '../images/Presentacion_01/Foto_Perfil.jpeg';
import instagram from '../images/Presentacion_01/logoinstagram.png';
import github from '../images/Presentacion_01/logogithub.png';
import linkedin from '../images/Presentacion_01/logo_Linkedin.png';
import itch from '../images/Presentacion_01/logoitch.png';
import discord from '../images/Presentacion_01/logoDiscord.png';


function Presentacion_02() {

    const [seleccion, setSeleccion] = useState('Presentacion');
    const seleccionarPantalla = async (pantalla) => {
        setSeleccion(pantalla);
    }

    return (
        <>
            <header>
                <h1>Kevin Rodrigo Wawryniuk </h1>

                <h2>Programador</h2>
                <ul>
                    {/* el id esta sin uso en css*/}
                    <li> <label id='labelHeaders' htmlFor='presentacion'> Presentacion </label> </li>
                    <li> <label id='labelHeaders' htmlFor='habilidades'> Habilidades </label> </li>
                </ul>
            </header>
            <main>

                <input id='presentacion' className='esconderInputs' name='p' type="radio" value={'Presentacion'} checked={seleccion === 'Presentacion'} onChange={(event) => seleccionarPantalla(event.target.value)} />
                <input id='habilidades' className='esconderInputs' name='p' type="radio" value={'Habilidades'} checked={seleccion === 'Habilidades'} onChange={(event) => seleccionarPantalla(event.target.value)} />

                {/* PRESENTACION PERSONAL  */}
                {seleccion === 'Presentacion' && (
                    <section id='SeccionPresentacion'>
                        <h3>Presentacion</h3>
                        <article id='articlep'>
                            <img id='fotoPerfil' src={foto} alt="Foto De Kevin" />
                            <p id='brevePresentacion'>
                                Programador dinámico con conocimientos sólidos en HTML-CSS y dominio en lenguajes tales como (C, C++, C#, Java, JavaScript, Python, TypeScript).
                                Tengo Capacitación en Auxiliar de farmacia.
                                Soy una persona responsable me gusta la puntualidad el orden y cumplir con los objetivos propuestos en tiempo y forma tambien considero que el trabajo en equipo proporciona una mejor visión de lo que se quiere conseguir y un mejor resultado final.
                            </p>
                        </article>
                    </section>
                )}
                {/* COLOCAR LAS HABILIDADER */}
                {seleccion === 'Habilidades' && (

                    <section id='sectionHabilidades'>
                        <h3>Habilidades</h3>

                        <section id='secciones'>
                            <section id='programas'>
                                <h3> Programas </h3>
                                <ul>
                                    <b> Unity </b>
                                    <li> <span id='fondoBarra'> <span id='barra70'> <div id='cargar'> </div> </span> <strong> 70% </strong></span> </li>
                                    <b> Microsoft VisualStudio </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b> VisualStudio Code </b>
                                    <li> <span id='fondoBarra'> <span id='barra40'> <div id='cargar'> </div> </span> <strong> 40% </strong> </span> </li>
                                    <b>  Postman </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b>  MySQL Workbench </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b>  OpenCobolIDE </b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong> 20% </strong> </span> </li>
                                    <b> Arduino IDE </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b>  Git Bash </b>
                                    <li> <span id='fondoBarra'> <span id='barra5'> <div id='cargar'> </div> </span> <strong> 1% </strong> </span> </li>
                                    <b>  Blender </b>
                                    <li> <span id='fondoBarra'> <span id='barra40'> <div id='cargar'> </div> </span> <strong> 40% </strong> </span> </li>
                                </ul>
                            </section>

                            <section id='lenguajes'>
                                <h3> Lenguajes </h3>
                                <ul>
                                    <b>  C# </b>
                                    <li> <span id='fondoBarra'> <span id='barra70'> <div id='cargar'> </div> </span> <strong> 70% </strong></span> </li>
                                    <b> HTML-CSS</b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b> C</b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b>  C++ </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b>  JavaScipt </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b>  MySQL </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% </strong> </span> </li>
                                    <b> COBOL</b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong> 20% </strong> </span> </li>
                                    <b>  Java </b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong> 20% </strong> </span> </li>
                                    <b>  Python </b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong> 20% </strong> </span> </li>
                                </ul>
                            </section>
                        </section>
                    </section>
                )}
            </main>

            <footer>
                {/* COLLOCAR LOS HIPERENLAZES */}
                <ul>
                    <li><a href="https://www.instagram.com/kevinwawryniuk/"> <img id='logosEnlaces' src={instagram} alt="" /> </a></li>
                    <li><a href="https://github.com/Kevni-Rodrigo-Wawryniuk?tab=repositories"> <img id='logosEnlaces' src={github} alt="" /> </a></li>
                    <li><a href="https://discord.gg/mMdAMRSA"> <img id='logosEnlaces' src={discord} alt="Discord" /></a></li>
                    <li><a href="https://www.linkedin.com/in/kevin-rodrigo-wawryniuk-7932a020b/"> <img id='logosEnlaces' src={linkedin} alt="" /> </a></li>
                    <li><a href="https://kwawryniuk.itch.io"> <img id='logosEnlaces' src={itch} alt="" /> </a></li>
                </ul>
            </footer>
            <div>

            </div>
        </>
    )
}

export default Presentacion_02;