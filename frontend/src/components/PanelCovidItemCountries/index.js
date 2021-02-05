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
  Teste
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

          <ContainerDeaths>
            <CasesDeaths>
              Mortos
              <ContainerHr />
            </CasesDeaths>
            {props.item.deaths.toLocaleString('pt-BR')}
          </ContainerDeaths>

          <ContainerDeaths>
            <CasesDeaths>
              Recuperados
              <ContainerHr />
            </CasesDeaths>
            {props.item.recovered}
          </ContainerDeaths>
        </Teste>
      </ContainerInformation>
    </Container>
  );
}
