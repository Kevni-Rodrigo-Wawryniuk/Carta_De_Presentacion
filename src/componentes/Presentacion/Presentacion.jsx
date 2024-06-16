import 'react'
import { useState } from 'react';
import './Presentacion.css';

import foto from '../images/Foto_Perfil.jpeg';

import github from '../images/logogithub.png';
import linkedin from '../images/logo_Linkedin.png';
import itch from '../images/logoitch.png';
import discord from '../images/logoDiscord.png';


function Presentacion() {

    const [seleccion, setSeleccion] = useState('presentacion');
    const seleccionarPantalla = async (pantalla) => {
        setSeleccion(pantalla);
    }

    return (
        <>
            <header>
                <h1> Kevin Rodrigo Wawryniuk </h1>

                <ul>
                    <li><label htmlFor="p"> Presentacion </label></li>
                    <li><label htmlFor="h"> Habilidades </label></li>
                </ul>
            </header>

            <main>
                <input id='p' name='pantallas' value={'presentacion'} checked={seleccion === 'presentacion'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />
                <input id='h' name='pantallas' value={'habilidades'} checked={seleccion === 'habilidades'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />

                {seleccion === 'presentacion' && (
                    <section id='SeccionPresentacion'>
                        <h2>Presentacion</h2>
                        <article>
                            <div><img src={foto} alt="" /></div>
                            <p>
                                Programador dinámico con sólidos conocimientos en HTML y CSS, y dominio en una variedad de lenguajes de programación incluyendo C, C++, C#, Java, JavaScript, Python y TypeScript.

                                Tengo experiencia en el uso de herramientas como Unity, OpenCobolIDE, Visual Studio Code, Postman, Git Bash, Arduino, MySQL, SQLite, Blender y Android Studio.

                                Además, cuento con capacitación como auxiliar de farmacia y auxiliar instalacion electrica.

                                Soy persona responsable, puntual y organizada, con compromiso en cumplir los objetivos propuestos en tiempo y forma. Me gusta el trabajo en equipo, por que proporciona una mejor visión de los objetivos tambien enriquece los conocimientos y conduce a un mejor resultado final.
                            </p>
                        </article>
                    </section>
                )}
                {seleccion === 'habilidades' && (
                    <section id='seccionHabilidades'>
                        <h2>Habilidades</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Herramientas</th>
                                    <th>Nivel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Unity</td>
                                    <td>Intermedio a avanzado</td>
                                </tr>
                                <tr>
                                    <td>Visual Studio Code</td>
                                    <td>Intermedio a avanzado</td>
                                </tr>
                                <tr>
                                    <td>Postman</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>MySQL Workbench</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>Arduino</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>GitHub Desktop</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>OpenCOBOLIDE</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>Blender</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>GitBash</td>
                                    <td>Muy basico</td>
                                </tr>
                                <tr>
                                    <td>Android Studio</td>
                                    <td>Muy basico</td>
                                </tr>
                                <tr>
                                    <td>SQLlite</td>
                                    <td>Muy basico</td>
                                </tr>


                            </tbody>
                            <thead>
                                <tr>
                                    <th>Lenguajes</th>
                                    <th>Nivel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>C#</td>
                                    <td>Intermedio a avanzado</td>
                                </tr>
                                <tr>
                                    <td>HTML/CSS</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>JavaScript</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>SQL</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>C++</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>COBOL</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>Java</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>Basico</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Librerias y Entornos</th>
                                    <th>Nivel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Node.js</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>React.js</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                                <tr>
                                    <td>Vite.js</td>
                                    <td>Basico a intermedio</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Idiomas</th>
                                    <th>Nivel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ingles</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>ChinoMandarin</td>
                                    <td>Basico</td>
                                </tr>
                                <tr>
                                    <td>Japones</td>
                                    <td>Basico</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                )}
            </main>

            <footer>
                {/* COLLOCAR LOS HIPERENLAZES */}
                <ul>
                    <li><a id='gi' href="https://github.com/Kevni-Rodrigo-Wawryniuk?tab=repositories"> <img src={github} alt="" /> </a></li>
                    <li><a id='di' href="https://discord.gg/mMdAMRSA"> <img src={discord} alt="Discord" /></a></li>
                    <li><a id='li' href="https://www.linkedin.com/in/kevin-rodrigo-wawryniuk-7932a020b/"> <img src={linkedin} alt="" /> </a></li>
                    <li><a id='it' href="https://kwawryniuk.itch.io"> <img src={itch} alt="" /> </a></li>
                </ul>
            </footer>
            <div>

            </div>
        </>
    )
}

export default Presentacion;