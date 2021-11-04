import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { goBack } from '../../routes/coordinator';

export default function Header() {
    const history = useHistory()

    return (
        <div>
            <div>
                <Route exact path={['/cadastro', '/restaurante/:id', '/cadastro/endereco', '/carrinho']}>
                        <ArrowBackIosIcon size={24} onClick={() => goBack(history)} />
                </Route>
            </div>
            
            <div>
                <Route exact path={['/entrar', 'cadastrar', '/cadastro/endereco']}>
                        <Title></Title>
                </Route>
                <Route exact path={'/home'}>
                        <Title>FutureEats</Title>
                </Route>
                <Route exact path={'/restaurante/:id'}>
                        <Title>Restaurante</Title>
                </Route>
                <Route exact path={'/carrinho'}>
                        <Title>Carrinho</Title>
                </Route>
                <Route exact path={'/perfil'}>
                        <Title>Perfil</Title>
                </Route>
            </div>
        
        </div>

    );
}