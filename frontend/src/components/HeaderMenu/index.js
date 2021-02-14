import React from 'react';
import imageCovid from '../../image/covid.png';
import { A } from 'hookrouter';
import imageLogout from '../../image/sair.ico';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
        {/* <FontAwesomeIcon icon={faBars} /> */}

        <ContainerMenus>

          <ContainerImage src={imageCovid} alt="Covid" />
          
          <A href="/home">
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
      </ContainerHeader>
    </Container>
  );
}