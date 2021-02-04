import React, { useState } from 'react';
import { A } from 'hookrouter';
import ContainerItemNotice from '../ContainerItemNotice';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';

import {
  Container,
  ContainerItemHome,
} from './styled';

export default () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <HeaderMenu />
      <ContainerItemHome>
        <A href="/information/1">
          <ContainerItemNotice text={'O QUE É COVID - 19'} />
        </A>

        <A href="/information/2">
          <ContainerItemNotice text={'QUAIS SÃO OS SINTOMAS'} />
        </A>

        <A href="/information/3">
          <ContainerItemNotice text={'COMO É TRANSMITIDO'} />
        </A>

        <A href="/information/4">
          <ContainerItemNotice text={'DIAGNÓSTICO'} />
        </A>
        {/* <ContainerItemNotice text={''} /> */}
        <A href="/information/5">
          <ContainerItemNotice text={'SE EU FICAR DOENTE'} />
        </A>

        {/* <A href="/information/6">
          <ContainerItemNotice text={'SERVIÇO DE SAÚDE'} />
        </A> */}

        <A href="/information/6">
          <ContainerItemNotice text={'COMO SE PROTEGER'} />
        </A>

        <A href="/information/7">
          <ContainerItemNotice text={'FAKE NEWS'} />
        </A>
      </ContainerItemHome>
      <Footer />
    </Container>
  );
}