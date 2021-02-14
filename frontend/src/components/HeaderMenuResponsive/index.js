import React, { useState } from 'react';
import { A } from 'hookrouter';
import imageLogout from '../../image/sair.ico';
import imageCovid from '../../image/covid.png';


import {
  Container,
  ContainerMenus,
  ContainerImageLogou,
  ContainerImage
} from './styled';

export default (props) => {
  return (
    <Container>
      
      <ContainerMenus>
        <A href="/home" >
          Home
          </A>
        <A href="/graficos">
          Mapa da Covid - 19
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
    </Container>
  );
}