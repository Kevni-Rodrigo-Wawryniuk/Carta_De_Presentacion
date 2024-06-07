import './Presentacion.css'
import fotoUsuario from '../images/Presentacion_00/Foto_Perfil.jpeg';
import iconoWindows from '../images/Presentacion_00/Icono_De_Windows.png';

import email from '../images/Presentacion_00/icono_Email.png';
import git from '../images/Presentacion_00/icono_Git.png';
import insta from '../images/Presentacion_00/icono_instagram.png';
import itch from '../images/Presentacion_00/icono_itch.png';
import linkedin from '../images/Presentacion_00/icono_Linkedin.png';
import { useEffect } from 'react';


function Presentacion() {

    // MENUS
    let aw = document.getElementById('aw');
    let mw = document.getElementById('mw');

    let active = false;

    const buscarMenus = async () => {
        aw = document.getElementById('aw');
        mw = document.getElementById('mw');
    }

    //  BARRAS DE PORCENTAJE
    let bc70 = document.getElementById('bc70');
    let bc20 = [];
    let bc30 = [];

    // PORCENTAJES DE CARGA
    let pr30c = document.getElementById('pr30c');
    let pr30cp = document.getElementById('pr30cp');
    let pr30csh = document.getElementById('pr30csh');
    let pr30js = document.getElementById('pr30js');
    let pr30ms = document.getElementById('pr30ms');

    let p30 = 0;

    function Aumento30Porcentaje() {
        if (p30 < 30 && active === true) {
            p30++;
            document.querySelector(`.barra30`).style.width = p30 + '%';

            pr30c.textContent = p30 + '%';
            pr30cp.textContent = p30 + '%';
            pr30csh.textContent = p30 + '%';
            pr30js.textContent = p30 + '%';
            pr30ms.textContent = p30 + '%';
        }
    }

    let pr20j = document.getElementById('pr20j');
    let pr20p = document.getElementById('pr20p');
    let pr20co = document.getElementById('pr20co');

    let p20 = 0;

    function Aumento20Porcentaje() {
        if (p20 < 20 && active === true) {
            p20++;
            document.querySelector(`.barra20`).style.width = p20 + '%';

            pr20j.textContent = p20 + '%';
            pr20p.textContent = p20 + '%';
            pr20co.textContent = p20 + '%';
        }
    }

    let pr70cshart = document.getElementById('pr70shat');

    let p70 = 0;

    function Aumento70Porcentaje() {

        if (p70 < 70 && active === true) {
            p70++;
            document.querySelector(`.barra70`).style.width = p70 + '%'; 

            pr70cshart.textContent = p70 + '%';
        }

    }

    const BuscarBarras = async () => {

        bc70 = document.getElementById('bc70');

        bc20[0] = document.getElementById('bc20');
        bc20[1] = document.getElementById('bc201');
        bc20[2] = document.getElementById('bc202');
        
        bc30[0] = document.getElementById('bc30');
        bc30[1] = document.getElementById('bc301');
        bc30[2] = document.getElementById('bc302');
        bc30[3] = document.getElementById('bc303');
        bc30[4] = document.getElementById('bc304');

        //PORCENTAJE DE CARGA
        // 30%
        pr30c = document.getElementById('pr30c');
        pr30cp = document.getElementById('pr30cp');
        pr30csh = document.getElementById('pr30csh');
        pr30js = document.getElementById('pr30js');
        pr30ms = document.getElementById('pr30ms');
        // 20%
        pr20j = document.getElementById('pr20j');
        pr20p = document.getElementById('pr20p');
        pr20co = document.getElementById('pr20co');
        // 70%
        pr70cshart = document.getElementById('pr70shat');
    }

    useEffect(() => {
        buscarMenus();
        BuscarBarras();
    });


    const mosrtarMenu = async (event) => {

        event.preventDefault();

        if (active == false) {

            active = true;

            console.log(active);

            // BARRAS ACTIVAS
            bc70.classList.add('barra70');

            for(let i = 0; i < bc30.length ; i++)
            {
                bc30[i].classList.add('barra30');
            }
            for(let i = 0; i < bc20.length; i++)
            {
                bc20[i].classList.add('barra20');
            }

            // MENUS 
            aw.classList.remove('esconder');
            aw.classList.add('mostrar');

            mw.classList.remove('esconder');
            mw.classList.add('mostrar');

            // PORCENTAJE DE CARGA
            setInterval(Aumento30Porcentaje, 25);
            setInterval(Aumento20Porcentaje, 25);
            setInterval(Aumento70Porcentaje, 15);
        } else {

            p30 = 0;
            p20 = 0;
            p70 = 0;

            // BARRAS ACTIVAS
            bc70.classList.remove('barra70');
            
            for(let i = 0; i < bc30.length ; i++)
            {
                bc30[i].classList.remove('barra30');
            }
            for(let i = 0; i < bc20.length ; i++)
            {
                bc20[i].classList.remove('barra20');
            }
            
            // MENUS
            aw.classList.remove('mostrar');
            aw.classList.add('esconder');

            mw.classList.remove('mostrar');
            mw.classList.add('esconder');

            active = false;

            console.log(active);
        }
    }
    /*
        function Burbujas() {
            const burbujasContainer = document.querySelector('.burbujas');
    
    
            for (let i = 0; i < 8; i++) {
                const burbuja = document.createElement('span');
                burbuja.classList.add('burbuja');
    
                burbujasContainer.appendChild(burbuja);
                burbuja.style.left = `${Math.random() * 100}%`;
                burbuja.style.animationDuration = `${Math.random() * 6 + 2}s`;
            }
        }
    */

    return (
        <>
            <div className='Fondo'>

                <main id='aw' className='administrador esconder'>
                    <img src={fotoUsuario} alt="" />
                    <div>
                        <h1>Kevin Rodrigo Wawryniuk</h1>
                        <h2>Programador</h2>
                    </div>
                </main>

                <div id='mw' className='menuWindows esconder'>
                    <article>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam eum fuga est, reiciendis esse placeat mollitia! Repudiandae ex fuga id ratione officia inventore quidem, tempore odio itaque cupiditate? Ex, quibusdam.</p>
                    </article>

                    <section>
                        <h3>Habilidades</h3>
                        <strong> C </strong>
                        <div className='fondoBarra'> <div id='bc30' className=''> <span id='pr30c'> 0% </span> </div>  </div>

                        <strong> C++ </strong>
                        <div className='fondoBarra'> <div id='bc301' className=''> <span id='pr30cp'> 0% </span> </div> </div>

                        <strong> C# </strong>
                        <div className='fondoBarra'> <div id='bc70' className=''> <span id='pr70shat'> 0% </span> </div> </div>

                        <strong> HTML-CSS </strong>
                        <div className='fondoBarra'> <div id='bc302' className=''> <span id='pr30csh'> 0% </span> </div> </div>

                        <strong> JavaScript </strong>
                        <div className='fondoBarra'> <div id='bc303' className=''> <span id='pr30js'> 0% </span> </div> </div>

                        <strong> Java </strong>
                        <div className='fondoBarra'> <div id='bc20' className=''> <span id='pr20j'> 0% </span> </div> </div>

                        <strong> Python </strong>
                        <div className='fondoBarra'> <div id='bc201' className=''> <span id='pr20p'> 0% </span> </div> </div>

                        <strong> MySQL </strong>
                        <div className='fondoBarra'> <div id='bc304' className=''> <span id='pr30ms'> 0% </span> </div> </div>

                        <strong> COBOL </strong>
                        <div className='fondoBarra'> <div id='bc202' className=''> <span id='pr20co'> 0% </span> </div> </div>

                    </section>
                </div>

                <footer id='bt' className='barraTareas mostrar'>
                    <div className='iconoWindows'>
                        <button onClick={(event) => mosrtarMenu(event)}>
                            <img src={iconoWindows} alt="" />
                        </button>
                    </div>

                    <a href=""><img src={email} alt="" /></a>
                    <a href=""><img src={git} alt="" /></a>
                    <a href=""><img src={insta} alt="" /></a>
                    <a href=""><img src={itch} alt="" /></a>
                    <a href=""><img src={linkedin} alt="" /></a>

                </footer>

                <div className='burbujas'>
                    <span style={{ '--i': '11', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '14', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '18', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '21', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '24', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '28', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '18', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '11', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '14', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '24', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '28', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '21', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '14', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '18', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '11', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '28', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '24', animationDuration: 'calc(125s / var(--i))' }}></span>
                    <span style={{ '--i': '21', animationDuration: 'calc(125s / var(--i))' }}></span>
                </div>
            </div>
        </>
    )
}

export default Presentacion;