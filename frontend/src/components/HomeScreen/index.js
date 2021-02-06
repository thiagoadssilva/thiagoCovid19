import React from 'react';
import imageHomeScreen from '../../image/home.jpg';
import { A } from 'hookrouter';
import Button from '@material-ui/core/Button';


import {
  Container,
  ContainerImageHomeScreen,
  ContainerLogin,
  ContainerLabelLogin,
  ContainerVersao
} from './styled';

export default () => {
  return (
    <Container>
      <ContainerImageHomeScreen src={imageHomeScreen} alt="Home Screen" />
      <ContainerLogin>

        <ContainerLabelLogin>
          Estatísticas
        </ContainerLabelLogin>
        <ContainerVersao>
          (Versão WEB)
        </ContainerVersao>


        <A href="/home">
          <Button variant="contained">Entrar</Button>
        </A>

      </ContainerLogin>
    </Container>
  );
}