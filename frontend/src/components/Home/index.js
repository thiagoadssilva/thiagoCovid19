import React, {useState} from 'react';
import imageCovid from '../../image/home.jpg';
import { A } from 'hookrouter';
import imageLogout from '../../image/sair.ico';
import ContainerItemNotice from '../ContainerItemNotice';

import {
  Container,
  ContainerHeader,
  ContainerImage,
  ContainerMenus,
  ContainerImageLogou,
  ContainerItemHome,
  ContainerFooter
} from './styled';

export default () => {
  const [text, setText] = useState('');

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

          <A href="/homeScreen">
            Sair
            <ContainerImageLogou src={imageLogout} alt="Covid" />
          </A>
        </ContainerMenus>
      </ContainerHeader>

      <ContainerItemHome>
          <ContainerItemNotice text={'O QUE É COVID - 19'} />
          <ContainerItemNotice text={'QUAIS SÃO OS SINTOMAS'} />
          <ContainerItemNotice text={'COMO É TRANSMITIDO'} />
          <ContainerItemNotice text={'DIAGNÓSTICO'} />
          <ContainerItemNotice text={''} />
          <ContainerItemNotice text={'SE EU FICAR DOENTE'} />
          <ContainerItemNotice text={'SERVIÇO DE SAÚDE'} />
          <ContainerItemNotice text={'COMO SE PROTEGER'} />
          <ContainerItemNotice text={'FAKE NEWS'} />
      </ContainerItemHome>

      <ContainerFooter>
        Todos contra a COVID - 19
      </ContainerFooter>


    </Container>
  );
}