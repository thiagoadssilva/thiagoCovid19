import React from 'react';
import imageHomeScreen from '../../image/home.jpg';
import imageLogin from '../../image/iconeEntrar.png';
import { A } from 'hookrouter';

import {
  Container,
  ContainerImageHomeScreen,
  ContainerImageLogin,
  ContainerLogin,
  ContainerLabelLogin
} from './styled';

export default () => {
  return (
    <Container>
      <ContainerImageHomeScreen src={imageHomeScreen} alt="Home Screen" />
      <ContainerLogin>

        <ContainerLabelLogin>
          Estatísticas
        </ContainerLabelLogin>

        <A href="/home">
          <ContainerImageLogin src={imageLogin} alt="Login" />
        </A>

      </ContainerLogin>
    </Container>
  );
}