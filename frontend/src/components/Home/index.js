import React, {useState} from 'react';

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

      <Footer />

    </Container>
  );
}