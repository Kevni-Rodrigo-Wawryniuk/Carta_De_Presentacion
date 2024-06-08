import { useEffect } from 'react';
import './Presentacion01.css';
import fotoPerfil from '../images/Presentacion_01/Foto_Perfil.jpeg';
import email from '../images/Presentacion_01/LogoEmail.jpg';
import insta from '../images/Presentacion_01/Instagram.png';
import face from '../images/Presentacion_01/logofacebook.jpg';
import git from '../images/Presentacion_01/logogithub.png';
import linke from '../images/Presentacion_01/logoLinkedin.png';


function Presentacion_01() {

    // Barras de carga
    let bc70 = [];
    let bc30 = [];
    let bc20 = [];

    // boton aside
    let asd = document.getElementById('bl');
    let active = false;
    let listaenlaces = document.getElementById('lista');

    // mostrar enlaces
    const MostrarEnlaces = async () => {

        if (active == false) {
            asd.classList.add("butonAside");

            listaenlaces.classList.add('ocultarenlaces');
            listaenlaces.classList.remove('mostrarenlaces');

            active = true;
        }
        else {
            asd.classList.remove("butonAside");

            listaenlaces.classList.add('mostrarenlaces');
            listaenlaces.classList.remove('ocultarenlaces');

            active = false;
        }
    }

    // Buscar los elemento en la 
    const BuscarElementos = async () => {
        active = false;
        // 70 porciento
        bc70[0] = document.getElementById('bc70');
        // 30 porciento
        bc30[0] = document.getElementById('bc30');
        bc30[1] = document.getElementById('bc31');
        bc30[2] = document.getElementById('bc32');
        bc30[3] = document.getElementById('bc33');
        bc30[4] = document.getElementById('bc34');
        // 20 porciento
        bc20[0] = document.getElementById('bc20');
        bc20[1] = document.getElementById('bc21');
        bc20[2] = document.getElementById('bc22');
        // boton aside
        asd = document.getElementById('bl');
        listaenlaces = document.getElementById('lista');

        MostrarEnlaces();
    }
    useEffect(() => {
        BuscarElementos();
    })

    return (
        <>

            <div className='grid'>
                <main className='main'>

                    <img src={fotoPerfil} alt="Foto de perfil" />
                    <h1> Kevin Rodrigo Wawryniuk</h1>
                    <h2>Programador</h2>

                    <article>
                        <p>
                            Programador dinamico con conocimientos solidos en HTML-CSS y dominio en lenguajes
                            Dominio de diversar herramientas de desarrollo tales como (visualStudio Code, Unity, Blender, COBOLide, Postman, Arduino, MySQLlite, MySQL Workbench).
                        </p>
                    </article>

                </main >

                <section className='section'>
                    <h3> Habilidades </h3>

                    <ul>
                        <b>C#</b>
                        <li className='barraFondo'> <div id='bc70' className='barraRelleno70p'> <div className='cargando'> </div> </div> <strong> 70% </strong> </li>

                        <b>HTML-CSS</b>
                        <li className='barraFondo'> <div id='bc31' className='barraRelleno30p'>  <div className='cargando'> </div> </div>  <strong>30%</strong> </li>
                        <b>C</b>
                        <li className='barraFondo'> <div id='bc30' className='barraRelleno30p'>  <div className='cargando'> </div> </div> <strong> 30%</strong> </li>
                        <b>C++</b>
                        <li className='barraFondo'> <div id='bc32' className='barraRelleno30p'>  <div className='cargando'> </div> </div> <strong> 30%</strong> </li>
                        <b>JavaScript</b>
                        <li className='barraFondo'> <div id='bc33' className='barraRelleno30p'>  <div className='cargando'> </div> </div> <strong> 30%</strong> </li>
                        <b>MySQL</b>
                        <li className='barraFondo'> <div id='bc34' className='barraRelleno30p'> <div className='cargando'> </div> </div> <strong> 30%</strong> </li>

                        <b>COBOL</b>
                        <li className='barraFondo'> <div id='bc20' className='barraRelleno20p'> <div className='cargando'> </div> </div> <strong> 20% </strong> </li>
                        <b>Java</b>
                        <li className='barraFondo'> <div id='bc21' className='barraRelleno20p'>  <div className='cargando'> </div> </div> <strong> 20% </strong> </li>
                        <b>Python</b>
                        <li className='barraFondo'> <div id='bc22' className='barraRelleno20p'>  <div className='cargando'> </div> </div> <strong> 20% </strong> </li>

                    </ul>
                </section>
            </div>

            <aside className='aside'>
                <ul id='lista' >
                    <li><a href=""> <img src={email} alt="Email" /> </a></li>
                    <li><a href=""> <img src={linke} alt=" Linkedin" /> </a></li>
                    <li><a href=""> <img src={insta} alt="Instagram" /> </a></li>
                    <li><a href=""> <img src={face} alt="Facebook" /> </a></li>
                    <li><a href=""> <img src={git} alt="GitHub" /> </a></li>
                </ul>
                <button id='bl' className='boton' onClick={(event) => MostrarEnlaces(event)}>enlaces</button>
            </aside>

            <div className='fondo'>

            </div>


        </>
    )
}

export default Presentacion_01;