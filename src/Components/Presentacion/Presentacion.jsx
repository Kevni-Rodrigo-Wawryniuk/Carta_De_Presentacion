/* eslint-disable react-hooks/exhaustive-deps */
import 'react'
import { useEffect, useState } from 'react';
import './Presentacion.css';

import github from '../images/Logos/logogithub.png';
import linkedin from '../images/Logos/logo_Linkedin.png';
import itch from '../images/Logos/logoitch.png';
import discord from '../images/Logos/logoDiscord.png';

// Projectos Web
import PrimerProjecto from '../images/Projectos/PrimerProjecto.png';

import climb from '../images/Projectos/Climb.png';
import enlacarreterano from '../images/Projectos/EnlaCarreterano.png';
import spacetravel from '../images/Projectos/spaceTravel.png';

// Tecnologias
import visual from '../images/Tecnologias/visualstudiocode.svg';
import recat from '../images/Tecnologias/react.svg';
import node from '../images/Tecnologias/nodedotjs.svg';
import vite from '../images/Tecnologias/vite.svg';
import git from '../images/Tecnologias/git.svg';
import gith from '../images/Tecnologias/github.svg';
import unityt from '../images/Tecnologias/unity.svg';
import postman from '../images/Tecnologias/postman.svg';
import mysql from '../images/Tecnologias/mysql.svg';
import asprite from '../images/Tecnologias/ase64.png';

function Presentacion() {
    let fullstack, unity;
    useEffect(() => {
        seleccionarPantalla(seleccion);
        fullstack = document.getElementById('FullStack');
        unity = document.getElementById('Unity');
    })
    const [seleccion, setSeleccion] = useState('FullStack');
    const seleccionarPantalla = async (pantalla) => {
        setSeleccion(pantalla);
        fullstack = document.getElementById('FullStack');
        unity = document.getElementById('Unity');
        if (pantalla === 'FullStack') {
            fullstack.classList.add('nohide');
            unity.classList.remove('nohide');
        } else if (pantalla === 'Unity') {
            fullstack.classList.remove('nohide');
            unity.classList.add('nohide');
        }
    }

    return (
        <>
            <header>

                <h1>Kevin Rodrigo Wawryniuk</h1>
                <h2>Desarrollador</h2>
                <ul>
                    <li><label id='FullStack' htmlFor="fe">Full-Stack</label></li>
                    <li><label id='Unity' htmlFor="vj">Videojuegos</label></li>
                </ul>
            </header>

            <main>
                <input id='fe' name='pantallas' value={'FullStack'} checked={seleccion === 'FullStack'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />
                <input id='vj' name='pantallas' value={'Unity'} checked={seleccion === 'Unity'} onChange={(event) => seleccionarPantalla(event.target.value)} type="radio" />

                {seleccion === 'FullStack' && (
                    <section id='Seccionfullstack'>
                        <h2>Trayectoria como Desarrollador Full-Stack</h2>
                        <p> Hola, soy un desarrollador Full Stack con una sólida base en el desarrollo web y una pasión por aprender y crear soluciones tecnológicas. <br /> Aunque no tengo experiencia laboral formal, he adquirido una amplia experiencia autodidacta y he completado un curso especializado que me ha proporcionado las habilidades y conocimientos necesarios para trabajar en el campo del desarrollo web. <br/> Scrolea un poco para ver mis projectos y tecnologias usadas.</p>

                        <section id='projectos'>
                            <h2>Projectos</h2>
                            <ul>
                                <li id='controlStrock'>
                                    <a href="https://github.com/Kevni-Rodrigo-Wawryniuk/ControlStock">
                                        <img src={PrimerProjecto} alt="" />
                                        <div>
                                            <h2>Pagina de Control de Stock</h2>
                                            <p>Esta es mi primera página en la que he trabajado en el backend, encargándome de la base de datos y de la conexión con el frontend. <br />La página está diseñada para el manejo y registro de diversos artículos relacionados con la temática de Star Wars.</p>
                                        </div>
                                    </a>

                                </li>
                            </ul>
                        </section>
                        <section id='tecnologias'>
                            <h2>Tecnoligias</h2>
                            <ul>
                                <img id='node' src={node} alt="" />
                                <img id='react' src={recat} alt="" />
                                <img id='visual' src={visual} alt="" />
                                <img id='vite' src={vite} alt="" />
                                <img id='git' src={git} alt="" />
                                <img id='github' src={gith} alt="" />
                                <img id='postman' src={postman} alt="" />
                                <img id='mysql' src={mysql} alt="" />
                            </ul>
                        </section>
                    </section>
                )}
                {seleccion === 'Unity' && (
                    <section id='SeccionUnity'>
                        <h2>Trayectoria como Desarrollador de Videojuegos</h2>
                        <p>Tambien soy, un apasionado programador de videojuegos con años de experiencia autodidacta en el desarrollo de juegos. <br /> Aunque no tengo experiencia laboral formal en la industria, he dedicado un considerable tiempo a aprender y dominar diversas tecnologías y herramientas relacionadas con la creación de videojuegos. <br/> Scrolea un poco para ver mis projectos finalizados</p>
                        <section id='projectosVJ'>
                            <h2>Projectos</h2>
                            <ul>
                                <li id='climb'>
                                    <a href="https://kwawryniuk.itch.io/climb">
                                        <img src={climb} alt="" />
                                        <div>
                                            <h3>Climb</h3>
                                            <p>En este emocionante juego, tu objetivo es ascender por la imponente torre para alcanzar su cima. <br /> A medida que subes, enfrentarás una serie de intrincados rompecabezas y desafíos que pondrán a prueba tu ingenio y habilidades. Solo resolviendo estos enigmas podrás avanzar y, finalmente, descubrir el tesoro oculto en lo alto de la torre. <br /> ¡Prepárate para una aventura llena de misterio y diversión mientras te embarcas en esta épica búsqueda!</p>
                                        </div>
                                    </a>
                                </li>
                                <li id='spaceTravel'>
                                    <a href="https://kwawryniuk.itch.io/space-travel">
                                        <img src={spacetravel} alt="" />
                                        <div>
                                            <h3>Space Travel</h3>
                                            <p>En este emocionante juego, tu misión es defenderte de oleadas de enemigos intergalácticos mientras navegas a través del vasto espacio. <br /> Prepárate para enfrentarte a una variedad de amenazas cósmicas y desafiarte a ti mismo en batallas intensas contra intrépidos adversarios. Solo superando estos desafíos podrás desbloquear nuevas tecnologías y mejorar tu nave espacial, abriéndote el camino para explorar y viajar por los rincones más remotos del universo. <br />¡Tu valentía y habilidades son la clave para conquistar el espacio y alcanzar nuevas galaxias!

                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li id='enlacarreterano'>
                                    <a href="https://nespi.itch.io/enlacarreterano">
                                        <img src={enlacarreterano} alt="" />
                                        <div>
                                            <h3>En la carretera no</h3>
                                            <p>En este juego, tu misión es detener a un camión de basura descontrolado que está arrasando con la belleza de la Selva Misionera. <br />Este camión, lleno de residuos y desechos, está causando un daño devastador al ecosistema local, y solo tú puedes detenerlo. Tu objetivo es perseguir el camión, evitar que siga esparciendo basura y encontrar la manera de neutralizar la amenaza antes de que sea demasiado tarde. <br /> ¡Actúa rápido, protege la selva y salva la vida salvaje de esta increíble aventura ecológica!</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                        </section>
                        <section id='tecnologiasVJ'>
                            <h2>Tecnologias</h2>
                            <ul>
                                <img id='asprite' src={asprite} alt="" />
                                <img id='unity' src={unityt} alt="" />
                                <img id='visualc' src={visual} alt="" />
                                <img id='gith' src={github} alt="" />
                            </ul>
                        </section>
                    </section>
                )}
            </main>
            <footer>
                {/* COLLOCAR LOS HIPERENLAZES */}
                <ul>
                    <li><a href="https://github.com/Kevni-Rodrigo-Wawryniuk?tab=repositories"> <img id='gith' src={github} alt="" /> </a></li>
                    <li><a href="https://discord.gg/mMdAMRSA"> <img id='dic' src={discord} alt="Discord" /></a></li>
                    <li><a href="https://www.linkedin.com/in/kevin-rodrigo-w-989402321/"> <img id='link' src={linkedin} alt="" /> </a></li>
                    <li><a href="https://kwawryniuk.itch.io"> <img id='itch' src={itch} alt="" /> </a></li>
                </ul>
            </footer>
        </>
    )
}

export default Presentacion;