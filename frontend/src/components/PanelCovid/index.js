import React, { useState, useEffect } from 'react';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Api from '../../services/Api';
import { Card } from 'react-bootstrap';

import {
  Container,
  ContainerInformation,
  ContainerCases,
  ContainerSuspects,
  ContainerDeaths,
  CasesDeaths,
  CasesSuspects,
  CasesLabel,
  ContainerTitleInformation,
  ContainerHr
} from './styled';

export default () => {
  const [information, setInformation] = useState([]);

  useEffect(() => {

    async function getInformation() {
      try {
        let { data } = await Api.get();
        setInformation(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getInformation();
  }, [])

  return (
    <Container>
      <HeaderMenu />
      {information.map(item =>
        <div key={item.uid}>
          {console.log(item)}

          
          <ContainerTitleInformation>{item.state}</ContainerTitleInformation>
          <ContainerInformation>

            <ContainerCases>
              <CasesLabel>
                Casos
                <ContainerHr />
              </CasesLabel>

              {(item.cases).toLocaleString('pt-BR')}
            </ContainerCases>

            <ContainerSuspects>
              <CasesSuspects>
                Suspeitos
                <ContainerHr />
              </CasesSuspects>
              {(item.suspects).toLocaleString('pt-BR')}
            </ContainerSuspects>

            <ContainerDeaths>
              <CasesDeaths>
                Mortos
                <ContainerHr />
              </CasesDeaths>
              {(item.deaths.toLocaleString('pt-BR'))}
            </ContainerDeaths>

          </ContainerInformation>
        </div>

      )}
      <Footer />
    </Container>
  );
}