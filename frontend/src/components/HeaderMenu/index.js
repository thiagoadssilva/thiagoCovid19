import React, { useState } from 'react';
import { A } from 'hookrouter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import imageCovid from '../../image/covid.png';
import imageLogout from '../../image/sair.ico';

import HeaderMenuResponsive from '../HeaderMenuResponsive';

import {
  Container,
  ContainerImage,
  ContainerMenus,
  ContainerImageLogou,
  ContainerMenuPizza,
  ContainerImage2
} from './styled';

export default () => {
  const [openMenuResponsive, setOpenMenuResponsive] = useState(false);

  function handleOpenMenuResponsive() {
    if (openMenuResponsive === true) {
      setOpenMenuResponsive(false);
    } else {
      setOpenMenuResponsive(true);
    }
  }

  return (
    <Container>

      <ContainerMenuPizza>
        <FontAwesomeIcon icon={faBars} onClick={(handleOpenMenuResponsive)} className="openMenu" />
        {openMenuResponsive === true &&

          <HeaderMenuResponsive setOpenMenuResponsive={setOpenMenuResponsive} />
        }

      </ContainerMenuPizza>

      <ContainerMenus className="open">

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
    </Container>
  );
}