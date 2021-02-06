import React, { useState } from 'react';

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
  ContainerHr,
  Teste,
  ContainerRecovered
} from './styled';

export default (props) => {
  const [control, setControl] = useState(props.controlHeight);

  return (

    <Container control={control}>
      <ContainerInformation>
        <ContainerTitleInformation>{props.item.country}</ContainerTitleInformation>
        <Teste>
          <ContainerCases>
            <CasesLabel>
              Casos
              <ContainerHr />
            </CasesLabel>
            {props.item.cases.toLocaleString('pt-BR')}
          </ContainerCases>

          <ContainerSuspects>
            <CasesSuspects>
              Confirmados
              <ContainerHr />
            </CasesSuspects>
            {props.item.confirmed.toLocaleString('pt-BR')}
          </ContainerSuspects>
          
          <ContainerRecovered>
            <CasesDeaths>
              Recuperados
              <ContainerHr />
            </CasesDeaths>
            {props.item.recovered}
          </ContainerRecovered>

          <ContainerDeaths>
            <CasesDeaths>
              Mortos
              <ContainerHr />
            </CasesDeaths>
            {props.item.deaths.toLocaleString('pt-BR')}
          </ContainerDeaths>

        </Teste>
      </ContainerInformation>
    </Container>
  );
}
