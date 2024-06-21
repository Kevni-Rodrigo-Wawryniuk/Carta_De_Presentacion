import 'react'
import { useState } from 'react';
import './Presentacion.css';

import foto from '../images/Foto_Perfil.jpeg';

import github from '../images/logogithub.png';
import linkedin from '../images/logo_Linkedin.png';
import itch from '../images/logoitch.png';
import discord from '../images/logoDiscord.png';

// Projectos Web
import PrimerProjecto from '../images/Projectos/PrimerProjecto.png';
import presentacion from '../images/Projectos/Presentacion.png';

function Presentacion() {

    const [seleccion, setSeleccion] = useState('Inicio');
    const seleccionarPantalla = async (pantalla) => {
        setSeleccion(pantalla);
    }

    return (
        <>
            <header>
                <h1> Kevin Rodrigo Wawryniuk </h1>
                <h2>Programador FullStack</h2>
                <ul>
                    <li><label htmlFor="p">Inicio</label></li>
                    <li><label htmlFor="fe">Frontend</label></li>
                    <li><label htmlFor="be">Backend</label></li>
                    <li><label htmlFor="vj">VideoJuegos</label></li>
                </ul>
            </header>

            <main>
                <input id='p' name='pantallas' value={'Inicio'} checked={seleccion === 'Inicio'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />
                <input id='fe' name='pantallas' value={'frontend'} checked={seleccion === 'frontend'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />
                <input id='be' name='pantallas' value={'backend'} checked={seleccion === 'backend'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />
                <input id='vj' name='pantallas' value={'videojuegos'} checked={seleccion === 'videojuegos'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />

                {seleccion === 'Inicio' && (
                    <section>
                        <h3>Presentacion</h3>
                        <article id='Presentacion'>
                            <img src={foto} alt="" />
                            <p>
                                Hola, soy un programador dinámico con sólidos conocimientos en programación web y desarrollo de videojuegos. Estoy familiarizado con diversas herramientas y tecnologías como Visual Studio Code, Unity, Node.js, React.js, Vite.js, entre otras.<br></br>

                                He tenido pocas pero muy enriquecedoras experiencias trabajando en equipo. Me considero una persona responsable y perfeccionista. Disfruto aprendiendo y mejorando en nuevas tecnologías constantemente.
                            </p>
                        </article>
                    </section>
                )}
                {seleccion === 'frontend' && (
                    <section>
                        <h3>Frontend</h3>
                        <article id='Frontend'>
                            <p>
                                Como desarrollador con un enfoque sólido en el desarrollo backend y experiencia complementaria en frontend. A lo largo de mi formación, me he desempeñado en proyectos personales donde he adquirido experiencia en el diseño e implementación de sistemas robustos y escalables.<br></br>
                                Me apasiona resolver desafíos técnicos y optimizar el rendimiento tanto del lado del servidor como del cliente.<br></br>
                                Estoy comprometido con el aprendizaje continuo de nuevas tecnologías y técnicas para mejorar mis habilidades y ofrecer soluciones innovadoras y de alta calidad, aquí te muestro algunos de mis proyectos realizados.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://github.com/Kevni-Rodrigo-Wawryniuk/Carta_De_Presentacion"> <img src={presentacion} alt="" /></a>
                                    <h3>Carta de Presentacion</h3>
                                    <p>
                                        Crear una página con el fin de mostrar mi currículum de manera más creativa.
                                    </p>
                                </li>
                                <li>
                                    <a href="https://github.com/Kevni-Rodrigo-Wawryniuk/Pagina-De-Control-De-Stock">
                                        <img src={PrimerProjecto} alt="" /></a>
                                    <h3>Primer Projecto</h3>
                                    <p>
                                        Primer proyecto: El objetivo era crear un sistema de gestión donde el usuario pudiera cargar artículos de la serie Star Wars y gestionar el stock de los productos. Mi participación en el frontend fue mínima, ya que mi enfoque principal estuvo en el backend.
                                    </p>
                                </li>
                            </ul>
                        </article>
                    </section>
                )}
                {seleccion === 'backend' && (
                    <section>
                        <h3>Backend</h3>
                        <article id='Backend'>
                            <p>
                                Como desarrollador con un enfoque sólido en el desarrollo backend y experiencia complementaria en frontend. A lo largo de mi formación, he participado en diversos proyectos personales donde he adquirido experiencia significativa en el diseño e implementación de sistemas backend robustos y escalables. Aquí te presento algunos de mis proyectos realizados:<br></br>

                                * Implementación de APIs REST utilizando Node.js y Express.<br></br>

                                * Diseño de bases de datos SQL para optimizar el almacenamiento y acceso eficiente a datos.<br></br>

                                * Integración de servicios y herramientas de terceros para mejorar la funcionalidad y escalabilidad de las aplicaciones.<br></br>

                                Me apasiona enfrentar desafíos técnicos complejos y mejorar el rendimiento del servidor mediante técnicas avanzadas de optimización. Estoy comprometido con el aprendizaje continuo de las últimas tecnologías y metodologías en desarrollo backend para ofrecer soluciones innovadoras y de alta calidad que satisfagan las necesidades del negocio y los usuarios finales.
                            </p>
                            <ul>
                                <li>
                                    <a href="https://github.com/Kevni-Rodrigo-Wawryniuk/Pagina-De-Control-De-Stock">
                                        <img src={PrimerProjecto} alt="" /></a>
                                    <h3>Primer Projecto
                                        <p>
                                            Primer proyecto: El objetivo era crear un sistema de gestión donde el usuario pudiera cargar artículos de la serie Star Wars y gestionar el stock de los productos. Mi participación en el frontend fue mínima, ya que mi enfoque principal estuvo en el backend.
                                        </p>
                                    </h3>

                                </li>
                            </ul>
                        </article>
                    </section>
                )}
                {seleccion === 'videojuegos' && (
                    <section>
                        <h3>Videojuego</h3>
                        <article id='VideoJuegos'>
                            <p>
                                Soy un apasionado desarrollador de videojuegos con habilidades sólidas en programación utilizando Unity.<br></br>
                                Durante mi formación y a través de proyectos personales, he adquirido experiencia significativa en el diseño, desarrollo y optimización de juegos utilizando Unity y C#.<br></br>
                                Me enfoco en crear experiencias interactivas y divertidas para los usuarios, y estoy emocionado por contribuir a proyectos innovadores en el campo de los videojuegos. <br></br>
                                Dejo aquí algunos proyectos que puede revisar, y si desea probarlos puede visitar mi página en itch.io.
                            </p>
                        </article>
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
        </>
    )
}

export default Presentacion;