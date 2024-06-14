import 'react'
import { useState } from 'react';
import './Presentacion_02.css';

import foto from '../images/Presentacion_01/Foto_Perfil.jpeg';
import github from '../images/Presentacion_01/logogithub.png';
import linkedin from '../images/Presentacion_01/logo_Linkedin.png';
import itch from '../images/Presentacion_01/logoitch.png';
import discord from '../images/Presentacion_01/logoDiscord.png';
import presentacion from '../images/Presentacion_01/Presentacion.png';
import habilidades from '../images/Presentacion_01/Habilidades.png';

function Presentacion_02() {


    const [seleccion, setSeleccion] = useState('Presentacion');
    const seleccionarPantalla = async (pantalla) => {
        setSeleccion(pantalla);
    }

    return (
        <>
            <header>
                <h1>Kevin Rodrigo Wawryniuk</h1>
                <h2>Programador</h2>

                <dl>
                    {/* el id esta sin uso en css*/}
                    <dt> <label htmlFor='presentacion'> <img src={presentacion} alt="Presentacion" /> </label> </dt>
                    <dt> <label htmlFor='habilidades'> <img src={habilidades} alt="Habilidades" /> </label> </dt>
                    {/* <dt> <label id='labelHeaders' htmlFor="projectos"> Projectos </label></dt> */}
                </dl>
            </header>
            <main>

                <input id='presentacion' className='esconderInputs' name='p' type="radio" value={'Presentacion'} checked={seleccion === 'Presentacion'} onChange={(event) => seleccionarPantalla(event.target.value)} />
                <input id='habilidades' className='esconderInputs' name='p' type="radio" value={'Habilidades'} checked={seleccion === 'Habilidades'} onChange={(event) => seleccionarPantalla(event.target.value)} />
                {/* <input id='projectos' className='esconderInputs' name='p' type="radio" value={'projectos'} checked={seleccion === 'projectos'} onChange={(event) => seleccionarPantalla(event.target.value)} /> */}

                {/* PRESENTACION PERSONAL  */}
                {seleccion === 'Presentacion' && (
                    <section id='SeccionPresentacion'>
                        <h3>Un Poco de Mi</h3>
                        <article>
                            <img src={foto} alt="Foto De Kevin" />
                            <p>
                                Programador dinámico con sólidos conocimientos en HTML y CSS, y dominio en una variedad de lenguajes de programación incluyendo C, C++, C#, Java, JavaScript, Python y TypeScript.

                                Tengo experiencia en el uso de herramientas como Unity, Microsoft Visual Studio, OpenCobolIDE, Visual Studio Code, Postman, Git Bash, Arduino, MySQL, SQLite, Blender y Android Studio.

                                Además, cuento con capacitación en Auxiliar de Farmacia.

                                Me considero una persona responsable, puntual y organizada, con un fuerte compromiso en cumplir los objetivos propuestos en tiempo y forma. Valoro el trabajo en equipo, ya que creo que proporciona una mejor visión de los objetivos y conduce a un mejor resultado final.
                            </p>
                        </article>
                    </section>
                )}
                {/* COLOCAR LAS HABILIDADER */}
                {seleccion === 'Habilidades' && (

                    <section id='sectionHabilidades'>
                        <h3>Habilidades</h3>

                        <section>
                            <section id='programas'>
                                <h3> Herraminetas y Tecnologias </h3> 
                                <ul> 
                                    <b> Unity </b>
                                    <li> <span id='fondoBarra'> <span id='barra70'> <div id='cargar'> </div> </span> <strong > 70% (Intermedio a Avanzado) </strong></span> </li>
                                    <b> Microsoft VisualStudio </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b> VisualStudio Code </b>
                                    <li> <span id='fondoBarra'> <span id='barra40'> <div id='cargar'> </div> </span> <strong > 40% (Intermedio) </strong> </span> </li>
                                    <b>  Postman </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b>  MySQL </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b>  OpenCobolIDE </b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong > 20% (Basico)</strong> </span> </li>
                                    <b> Arduino </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b>  Git Bash </b>
                                    <li> <span id='fondoBarra'> <span id='barra5'> <div id='cargar'> </div> </span> <strong > 1% (Muy Basico) </strong> </span> </li>
                                    <b>  Blender </b>
                                    <li> <span id='fondoBarra'> <span id='barra40'> <div id='cargar'> </div> </span> <strong > 40% (Intermedio) </strong> </span> </li>
                                </ul>
                            </section>

                            <section id='lenguajes'>
                                <h3> Lenguajes de Programacion </h3>
                                <ul>
                                    <b>  C# </b>
                                    <li> <span id='fondoBarra'> <span id='barra70'> <div id='cargar'> </div> </span> <strong > 70% (Intermedio a Avanzado) </strong></span> </li>
                                    <b> HTML-CSS</b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong> 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b> C</b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b>  C++ </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b>  JavaScipt </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b>  MySQL </b>
                                    <li> <span id='fondoBarra'> <span id='barra30'> <div id='cargar'> </div> </span> <strong > 30% (Basico a Intermedio)</strong> </span> </li>
                                    <b> COBOL</b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong > 20% (Basico)</strong> </span> </li>
                                    <b>  Java </b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong > 20% (Basico)</strong> </span> </li>
                                    <b>  Python </b>
                                    <li> <span id='fondoBarra'> <span id='barra20'> <div id='cargar'> </div> </span> <strong > 20% (Basico) </strong> </span> </li>
                                </ul>
                            </section>
                        </section>
                    </section>
                )}
            </main>

            <footer>
                {/* COLLOCAR LOS HIPERENLAZES */}
                <ul>
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