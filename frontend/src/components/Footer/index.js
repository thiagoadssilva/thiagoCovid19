import React from 'react';
import imageGit from '../../image/git.png';
import imageLinkedin from '../../image/likendin.svg';

import {
  Container,
  ContainerFooter,
  DescriptionLinkGit,
  DescriptionLinkLinkedin,
  ImageGit,
  ImageLik
} from './styled';

export default () => {
  return (
    <Container>
      <ContainerFooter>

        <DescriptionLinkGit href="https://github.com/thiagoadssilva/thiagoCovid19" target="_blank">
          <ImageGit src={imageGit} />              
        </DescriptionLinkGit>

        Todos contra a COVID - 19

        <DescriptionLinkLinkedin href="https://www.linkedin.com/in/thiagojosedasilva/" target="_blank">
          <ImageLik src={imageLinkedin} />              
        </DescriptionLinkLinkedin>

      </ContainerFooter>
    </Container>
  );
}