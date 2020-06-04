import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Cadastro() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();
        const data = {
            name,
            lastname,
            age,
            email,
            address
        }

        try {
            await api.post('students', data);

            alert('Cadastrado com sucesso');

            history.push('/cadastro');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="container-cadastro">
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
                                Listagem de alunos
                         </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <section>
                <h1>Cadastro</h1>
                <form onSubmit={handleCadastro}>
                    <h3>Estudantes</h3>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)} />

                    <input
                        type="text"
                        placeholder="Ultimo Nome"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)} />

                    <input
                        type="number"
                        placeholder="Idade"
                        value={age}
                        onChange={e => setAge(e.target.value)} />

                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <input
                        type="text"
                        placeholder="Endereço"
                        value={address}
                        onChange={e => setAddress(e.target.value)} />

                    <button type="submit">Ok</button>
                    <Link to="/">
                        Tela Inicial
                </Link>
                </form>
            </section>
        </div>
    );
}