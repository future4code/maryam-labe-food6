import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { goBack } from '../../routes/coordinator';
import { p } from '@material-ui/icons';
import { HeaderContainer, IconBack } from './styled';

export default function Header() {
        const history = useHistory()

        return (
                <HeaderContainer>
                        <div>
                                <Route exact path={['/cadastro', '/restaurantes/:id', '/perfil/dados', '/perfil/endereco']}>
                                        <IconBack onClick={() => goBack(history)} />
                                </Route>
                        </div>
                        <div>
                                <Route exact path={['/entrar', 'cadastrar', '/cadastro/endereco']}>
                                        <p></p>
                                </Route>
                                <Route exact path={'/'}>
                                        <p>Ifuture</p>
                                </Route>
                                <Route exact path={'/restaurantes/:id'}>
                                        <p>Restaurante</p>
                                </Route>
                                <Route exact path={'/carrinho'}>
                                        <p>Carrinho</p>
                                </Route>
                                <Route exact path={'/perfil'}>
                                        <p>Perfil</p>
                                </Route>
                                <Route exact path={"/perfil/dados"}>
                                        <p>Editar</p>
                                </Route>
                                <Route exact path={"/perfil/endereco"}>
                                        <p>Endereço</p>
                                </Route>
                        </div>
                
                </HeaderContainer>
        );
}