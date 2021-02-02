import React from 'react';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import imageGit from '../../image/git.png';
import imageLinkedin from '../../image/likendin.svg';

import {
  Container,
  ContainerBody,
  Warning,
  Update,
  Information,
  TitleWarning,
  DescriptionWarning,
  DescriptionInformation,
  TitleInformation,
  DescriptionUpdate,
  TitleUpdate,
  DescriptionLinkGit,
  DescriptionLinkLinkedin,
  ImageGit,
  ImageLik
} from './styled';

export default () => {
  return (
    <Container>
      <HeaderMenu />

      <ContainerBody>
        <Warning>
          <TitleWarning>Atenção</TitleWarning>
          <DescriptionWarning>
            Este painel foi desenvolvido com o objetivo de treinamento da tecnologia ‘Reactjs’
            para ser mais um veículo ‘Não’ oficial de comunicação sobre a situação epidemiológica da
            COVID-19 no Brasil.
          </DescriptionWarning>
        </Warning>

        <Update>
          <TitleUpdate>Atualizações</TitleUpdate>
          <DescriptionUpdate>
            O processo de atualização dos dados sobre os casos é carregado através da api
            ‘Covid19 Brazil API’ que está no endereço: https://covid19-brazil-api-docs.now.sh/.
          </DescriptionUpdate>
        </Update>

        <Information>
          <TitleInformation>Informações do Desenvolvedor do Projeto</TitleInformation>
          <DescriptionInformation>

            <DescriptionLinkGit href="https://github.com/thiagoadssilva/thiagoCovid19" target="_blank">
              <ImageGit src={imageGit} />
              https://github.com/thiagoadssilva/thiagoCovid19
            </DescriptionLinkGit>
            <DescriptionLinkLinkedin href="https://www.linkedin.com/in/thiagojosedasilva/" target="_blank">
              <ImageLik src={imageLinkedin} />
              https://www.linkedin.com/in/thiagojosedasilva/
            </DescriptionLinkLinkedin>

          </DescriptionInformation>
        </Information>

      </ContainerBody>

      <Footer />
    </Container>
  );
}