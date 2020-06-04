import React from 'react';

import { Link } from 'react-router-dom';

import Alunos from '../../assets/alunos.jpg'
import Logo from '../../assets/logo.png'

import './styles.css';

export default function PaginaInicial() {
    return (
        <div className="container-paginaInicial">
            <div className="container-menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Menu
                             </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Pagina inicial
                             </Link>
                        </li>
                        <li>
                            <Link to="/cadastro">
                                Cadastro Alunos
                             </Link>

                        </li>
                        <li>
                            <Link to="/alunos">
                                listagem de alunos
                         </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src={Logo} alt="logo da empresa" />
            <section>
                <div className="parte1">
                    <h1>Seja muito bem vindo!</h1>

                    <p>Aqui você cadastra seus alunos, de uma forma fácil.</p>
                    <p>Use o <strong> Menu inicial </strong> para desfrutar do sistema.</p>
                </div>

                <div className="parte2">

                    <img src={Alunos} alt="img alunos" />
                    <p>*Imagem meramente ilustrativa</p>
                </div>
            </section>

            <footer>&copy; Wesley Araujo</footer>
        </div>
    );
}