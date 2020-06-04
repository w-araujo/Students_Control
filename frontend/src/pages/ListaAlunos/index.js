import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { RiDeleteBinLine } from 'react-icons/ri';

import './styles.css';

export default function ListaAlunos() {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        api.get('/students').then(response => {
            setAlunos(response.data);
        })
    }, []);

   async function handleDelete(id) {
        try {
            await api.delete(`students/${id}`);

       setAlunos(alunos.filter(alunos => alunos.id !== id));
        } catch (err) { 
            alert('Erro ao deletar aluno, tente novamente');
        }
    }

    return (

        <div className="container-listaAlunos">
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
            <form>
                <h1>Lista de alunos</h1>
                <ul>
                    {alunos.map(alunos => (
                        <li>
                            <strong>Nome:</strong>
                            <p>{alunos.name}</p>
                            <strong>Ultimo Nome:</strong>
                            <p>{alunos.lastname}</p>
                            <strong>Idade:</strong>
                            <p>{alunos.idade}</p>
                            <strong>Endereço:</strong>
                            <p>{alunos.endereco}</p>

                            <Link onClick={() => handleDelete(alunos.id)} to="/alunos">
                                <RiDeleteBinLine style={{ width: 18, height: 30 }} />
                            </Link>

                        </li>

                    ))}

                </ul>
            </form>

        </div>
    )
}