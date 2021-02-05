import React, {useState} from 'react';

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
        <ContainerTitleInformation>{props.item.state}</ContainerTitleInformation>
        <Teste>
          <ContainerCases>
            <CasesLabel>
              Casos
              <ContainerHr />
            </CasesLabel>

            {(props.item.cases).toLocaleString('pt-BR')}
          </ContainerCases>

          <ContainerSuspects>
            <CasesSuspects>
              Suspeitos
              <ContainerHr />
            </CasesSuspects>
            {(props.item.suspects).toLocaleString('pt-BR')}
          </ContainerSuspects>

          <ContainerDeaths>
            <CasesDeaths>
              Mortos
              <ContainerHr />
            </CasesDeaths>
            {(props.item.deaths.toLocaleString('pt-BR'))}
          </ContainerDeaths>
        </Teste>
      </ContainerInformation>
    </Container>
  );
}