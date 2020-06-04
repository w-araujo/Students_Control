import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaInicial from './pages/PaginaInicial';
import Cadastro from './pages/Cadastro';
import ListaAlu from './pages/ListaAlunos';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PaginaInicial} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/alunos" component={ListaAlu} />
            </Switch>
        </BrowserRouter>
    )
}