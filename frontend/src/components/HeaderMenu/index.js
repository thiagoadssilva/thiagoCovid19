import React from 'react';
import imageCovid from '../../image/home.jpg';
import { A } from 'hookrouter';
import imageLogout from '../../image/sair.ico';

import {
  Container,
  ContainerHeader,
  ContainerImage,
  ContainerMenus,
  ContainerImageLogou,
} from './styled';

export default () => {
  return (
    <Container>
      <ContainerHeader>
        <ContainerImage src={imageCovid} alt="Covid" />
        <ContainerMenus>
          <A href="/home">
            Home
          </A>
          <A href="/graficos">
            Graficos
          </A>

          <A href="/painelCovid">
            Painel da COVID - 19
          </A>

          <A href="/sobre">
            Sobre
          </A>

          <A href="/">
            Sair
            <ContainerImageLogou src={imageLogout} alt="Covid" />
          </A>
        </ContainerMenus>
      </ContainerHeader>
    </Container>
  );
}