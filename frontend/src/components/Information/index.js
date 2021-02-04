import React from 'react';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';

import {
  Container,
  ContainerBlue,
  ContainerTitle,
  ContainerInformation,
  ContainerHr
} from './styled';

export default (props) => {
  var title = '';
  var information = '';

  if (props.id == 1) {
    title = 'O que é COVID - 19';
    information = "Os coronavírus são uma grande família de vírus comuns em muitas espécies diferentes de animais, incluindo camelos, gado, gatos e morcegos. Raramente, os coronavírus que infectam animais podem infectar pessoas, como exemplo do MERS-CoV e SARS-CoV. Recentemente, em dezembro de 2019, houve a transmissão de um novo coronavírus (SARS-CoV-2), o qual foi identificado em Wuhan na China e causou a COVID-19, sendo em seguida disseminada e transmitida pessoa a pessoa. A COVID-19 é uma doença causada pelo coronavírus, denominado SARS-CoV-2, que apresenta um espectro clínico variando de infecções assintomáticas a quadros graves. De acordo com a Organização Mundial de Saúde, a maioria (cerca de 80%) dos pacientes com COVID-19 podem ser assintomáticos ou oligossintomáticos (poucos sintomas), e aproximadamente 20% dos casos detectados requer atendimento hospitalar por apresentarem dificuldade respiratória, dos quais aproximadamente 5% podem necessitar de suporte ventilatório.";
  } else if (props.id == 2) {
    title = 'Quais são os sintomas';
    information = "Os sintomas da COVID-19 podem variar de um resfriado, a uma Síndrome Gripal-SG (presença de um quadro respiratório agudo, caracterizado por, pelo menos dois dos seguintes sintomas: sensação febril ou febre associada a dor de garganta, dor de cabeça, tosse, coriza) até uma pneumonia severa. Sendo os sintomas mais comuns: Tosse, Febre, Coriza, Dor de garganta, Dificuldade para respirar, Perda de olfato (anosmia), Alteração do paladar (ageusia), Distúrbios gastrintestinais (náuseas/vômitos/diarreia), Cansaço (astenia), Diminuição do apetite (hiporexia), Dispnéia ( falta de ar)";
  } else if (props.id == 3) {
    title = 'Como é transmitido';
    information = "A transmissão acontece de uma pessoa doente para outra ou por contato próximo por meio de:  Toque do aperto de mão contaminadas, Gotículas de saliva, Espirro, Tosse, Catarro, Objetos ou superfícies contaminadas, como celulares, mesas, talheres, maçanetas, brinquedos, teclados de computador etc.";
  } else if (props.id == 4) {
    title = 'Diagnóstico';
    information = "1 - O DIAGNÓSTICO CLÍNICO é realizado pelo médico atendente, que deve avaliar a possibilidade da doença, principalmente, em pacientes com a associação dos seguintes sinais e sintomas: Febre, que pode estar presente no momento do exame clínico ou referida pelo paciente (sensação febril) de ocorrência recente. Sintomas do trato respiratório (por exemplo, tosse, dispneia, coriza, dor de garganta) Outros sintomas consistentes incluindo, mialgias, distúrbios gastrointestinais (diarreia/náuseas/vômitos), perda ou diminuição do olfato (anosmia) ou perda ou diminuição do paladar (ageusia).";
  } else if (props.id == 5) {
    title = 'Se eu ficar doente';
    information = "Se estiver doente, com sintomas compatíveis com a COVID-19, tais como febre, tosse, dor de garganta e/ou coriza, com ou sem falta de ar, evite contato físico com outras pessoas, incluindo os familiares, principalmente, idosos e doentes crônicos, Procure imediatamente os postos de triagem nas Unidades Básicas de Saúde / UPAS ou outras unidades de saúde. Após encaminhamento consulte-se com o médico. Uma vez diagnosticado pelo médico, receba as orientações e prescrição dos medicamentos que você deverá usar. O médico poderá solicitar exames complementares. Inicie o tratamento prescrito imediatamente. Mantenha seu médico sempre informado da evolução dos sintomas durante o tratamento e siga suas recomendações.";
  } else if (props.id == 6) {
    title = 'COMO SE PROTEGER';
    information = "Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%. Essa frequência deve ser ampliada quando estiver em algum ambiente público (ambientes de trabalho, prédios e instalações comerciais, etc), quando utilizar estrutura de transporte público ou tocar superfícies e objetos de uso compartilhado. Ao tossir ou espirrar, cubra nariz e boca com lenço ou com a parte interna do cotovelo. Não tocar olhos, nariz, boca ou a máscara de proteção fácil com as mãos não higienizadas. Se tocar olhos, nariz, boca ou a máscara, higienize sempre as mãos como já indicado. Mantenha distância mínima de 1 (um) metro entre pessoas em lugares públicos e de convívio social. Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto. Higienize com frequência o celular, brinquedos das crianças e outro objetos que são utilizados com frequência. Não compartilhe objetos de uso pessoal como talheres, toalhas, pratos e copos. Mantenha os ambientes limpos e bem ventilados. Se estiver doente, evite contato próximo com outras pessoas, principalmente idosos e doentes crônicos, busque orientação pelos canais on-line disponibilizados pelo SUS ou atendimento nos serviços de saúde e siga as recomendações do profissional de saúde. Durma bem e tenha uma alimentação saudável. Recomenda-se a utilização de máscaras em todos os ambientes.  As máscaras de tecido (caseiras/artesanais), não são Equipamentos de Proteção Individual (EPI), mas podem funcionar como uma barreira física, em especial contra a saída de gotículas potencialmente contaminadas.";
  }else if (props.id == 7) {
    title = 'Fake News';
    information = "Para combater as Fake News sobre saúde, o Ministério da Saúde, de forma inovadora, está disponibilizando um número de WhatsApp para envio de mensagens da população. Vale destacar que o canal não será um SAC ou tira dúvidas dos usuários, mas um espaço exclusivo para receber informações virais, que serão apuradas pelas áreas técnicas e respondidas oficialmente se são verdade ou mentira. Qualquer cidadão poderá enviar gratuitamente mensagens com imagens ou textos que tenha recebido nas redes sociais para confirmar se a informação procede, antes de continuar compartilhando. O número é ( 61)99333-8597";
  }


  console.log(props);
  return (
    <Container>
      <HeaderMenu />
      <ContainerBlue>
        <ContainerTitle>
          {title}
          <ContainerHr />
        </ContainerTitle>
        <ContainerInformation>
          {information}
        </ContainerInformation>
      </ContainerBlue>
      <Footer />
    </Container>
  );
}