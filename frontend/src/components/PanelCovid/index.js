import React, { useState, useEffect, useCallback } from 'react';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Api from '../../services/Api';
import PanelCovidItemState from '../PanelCovidItemState';
import PanelCovidItemCountries from '../PanelCovidItemCountries';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';


import {
  Container,
  ContainerFilter,
  ContainerFilterRadio,
  ContainerFilterSearch,
  ContainerSelect,
  ContainerSelectTitle
} from './styled';

export default () => {

  const [information, setInformation] = useState([]);
  const [informationCountry, setInformationCountry] = useState([]);
  const [uniqueState, setUniqueState] = useState();
  const [uniqueCountry, setUniqueCountry] = useState();
  const [valueRadio, setValueRadio] = useState('states');
  const [displayControlState, setDisplayControlState] = useState(false);
  const [displayControlCountry, setDisplayControlCountry] = useState(false);
  const [controlHeight, setControlHeight] = useState(true);
  

  function handleChangeRadio(event) {
    setValueRadio(event.target.value);

    if (event.target.value === 'brazil/uf/') {
      setDisplayControlState(false);
      setDisplayControlCountry(true);
    } else if (event.target.value === 'states') {
      setDisplayControlState(true);
      setDisplayControlCountry(true);
    } else if (event.target.value === 'pais') {
      setDisplayControlState(true);
      setDisplayControlCountry(false);
    } else {
      setDisplayControlState(true);
      setDisplayControlCountry(true);
    }
  }

  const handleChangeSelectState = useCallback(async (event) => {
    const actualState = event.target.value;

    try {
      let { data } = await Api.get(`brazil/uf/${actualState}`);
      setUniqueState(data);
      
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleChangeSelectCountry = useCallback(async (event) => {
    const actualCountry = event.target.value;
    try {
      let { data } = await Api.get(actualCountry);
      setUniqueCountry(data);
      
    } catch (error) {
      console.log(error);
    }
  }, [])

  const handleCountry = useCallback(async (event) => {

    if (event.target.value === 'countries' || event.target.value === 'pais') {
      try {
        let { data } = await Api.get('countries');
        setInformationCountry(data.data);
        
        setUniqueCountry('');
      } catch (error) {
        console.log(error);
      }
    }

  }, [])

  useEffect(() => {

    setDisplayControlState(true);
    setDisplayControlCountry(true);

    Api.get()
      .then(({ data }) => setInformation(data.data))
      .catch(error => console.log(error));
    
  }, [])

  function renderSwitch(param) {
    switch (param) {
      case 'states':
      default:
        return (
          information.map(item => (
            <div >
              <PanelCovidItemState item={item} />
            </div>
          ))
        )
      case 'brazil/uf/':
        if (!uniqueState) {
          return (
            information.map(item => (
              <div >
                <PanelCovidItemState item={item} />
              </div>
            )))
        }
        return (
          <div>
            <PanelCovidItemState item={uniqueState} controlHeight={controlHeight} />
          </div>
        )
      case 'countries':
        return (
          informationCountry.map(item => (
            <div >
              <PanelCovidItemCountries item={item} />
            </div>
          ))
        )
      case 'pais':
        if (!uniqueCountry) {
          return (
            informationCountry.map(item => (
              <div >
                <PanelCovidItemCountries item={item} />
              </div>
            )))
        }

        return (

          <div>
            <PanelCovidItemCountries item={uniqueCountry.data} controlHeight={controlHeight} />
          </div>
        )
    }
  }

  return (
    <Container valueRadio={valueRadio}>
      <HeaderMenu />

        <ContainerFilter>

          <ContainerFilterRadio>
            <FormControl component="fieldset">
              <RadioGroup aria-label="gender" name="gender1" value={valueRadio} onChange={handleChangeRadio} onClick={handleCountry}>
                <FormControlLabel style={{ margin: 0 }} value="states" control={<Radio size='small' />} label="Todos os Estados" />
                <FormControlLabel style={{ margin: 0 }} value="brazil/uf/" control={<Radio size='small' />} label="Por Estados" />
                <FormControlLabel style={{ margin: 0 }} value="countries" control={<Radio size='small' />} label="Todos os Países" />
                <FormControlLabel style={{ margin: 0 }} value="pais" control={<Radio size='small' />} label="Por País" />
              </RadioGroup>
            </FormControl>
          </ContainerFilterRadio>

          <ContainerFilterSearch displayControlState={displayControlState}>
            <ContainerSelectTitle>
              Informe o Estado:
                </ContainerSelectTitle>
            <ContainerSelect>
              <select style={{ backgroundColor: '#CCCCCC' }} onChange={handleChangeSelectState} className="browser-default custom-select">
                <option value="">Selecione</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </ContainerSelect>
          </ContainerFilterSearch>

          {!displayControlCountry &&
            <ContainerFilterSearch>
              <ContainerSelectTitle>
                Informe o País:
                  </ContainerSelectTitle>
              <ContainerSelect>
                <select style={{ backgroundColor: '#CCCCCC' }} onChange={handleChangeSelectCountry} className="browser-default custom-select">
                  <option value="">Selecione</option>
                  <option value="Afghanistan">Afeganistão</option>
                  <option value="Albania">Albânia</option>
                  <option value="Algeria">Argélia</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Arménia</option>
                  <option value="Australia">Austrália</option>
                  <option value="Austria">Áustria</option>
                  <option value="Azerbaijan">Azerbaijão</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrein</option>
                  <option value="Bangladesh">Bangladeche</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Bielorrússia</option>
                  <option value="Belgium">Bélgica</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benim</option>
                  <option value="Bhutan">Butão</option>
                  <option value="Bolivia">Bolívia</option>
                  <option value="Bosnia-Herzegovina">Herzegovina</option>
                  <option value="Botswana">Botsuana</option>
                  <option value="Brazil">Brasil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgária</option>
                  <option value="Burkina">Burkina</option>
                  <option value="Burma">Birmânia</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Camboja</option>
                  <option value="Cameroon">Camarões</option>
                  <option value="Canada">Canadá</option>
                  <option value="Cape Verde Islands">Ilhas</option>
                  <option value="Chad">Chade</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colômbia</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Rica</option>
                  <option value="Croatia">Croácia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Chipre</option>
                  <option value="Czech Republic">República</option>
                  <option value="Denmark">Dinamarca</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Domínica</option>
                  <option value="Dominican Republic">República</option>
                  <option value="Ecuador">Equador</option>
                  <option value="Egypt">Egipto</option>
                  <option value="El Salvador">Salvador</option>
                  <option value="England">Inglaterra</option>
                  <option value="Eritrea">Eritreia</option>
                  <option value="Estonia">Estónia</option>
                  <option value="Ethiopia">Etiópia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finlândia</option>
                  <option value="France">França</option>
                  <option value="Gabon">Gabão</option>
                  <option value="Gambia">Gâmbia</option>
                  <option value="Georgia">Geórgia</option>
                  <option value="Germany">Alemanha</option>
                  <option value="Ghana">Gana</option>
                  <option value="Great Britain">Grã-Bretanha</option>
                  <option value="Greece">Grécia</option>
                  <option value="Grenada">Granada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guiné</option>
                  <option value="Guyana">Guiana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Holland">Países Baixos</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungria</option>
                  <option value="Iceland">Islândia</option>
                  <option value="India">Índia</option>
                  <option value="Indonesia">Indonésia</option>
                  <option value="Iran">Irão</option>
                  <option value="Iraq">Iraque</option>
                  <option value="Ireland">Irlanda</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Itália</option>
                  <option value="Japan">Japão</option>
                  <option value="Jordan">Jordânia</option>
                  <option value="Kazakhstan">Cazaquistão</option>
                  <option value="Kenya">Quénia</option>
                  <option value="Korea">Coreia</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Letónia</option>
                  <option value="Lebanon">Líbano</option>
                  <option value="Liberia ">Libéria </option>
                  <option value="Libya">Líbia</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lituânia</option>
                  <option value="Luxenbourg">Luxenbourg</option>
                  <option value="Macedonia">Macedónia</option>
                  <option value="Madasgascar">Madasgascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malásia</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Maldives">Maldivas</option>
                  <option value="Mauritania">Mauritânia</option>
                  <option value="Mauritius">Maurícia</option>
                  <option value="Mexico">México</option>
                  <option value="Moldova">Moldávia</option>
                  <option value="Monaco">Mónaco</option>
                  <option value="Mongolia">Mongólia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Marrocos</option>
                  <option value="Mozambique">Moçambique</option>
                  <option value="Namibia">Namíbia</option>
                  <option value="New Zealand ">Zelândia </option>
                  <option value="Nicaragua">Nicarágua</option>
                  <option value="Niger">Níger</option>
                  <option value="Nigeria">Nigéria</option>
                  <option value="North Korea">Coreia</option>
                  <option value="Norway">Noruega</option>
                  <option value="Oman">Omã</option>
                  <option value="Pakistan">Paquistão</option>
                  <option value="Panama">Panamá</option>
                  <option value="Papua New Guinea">Guiné</option>
                  <option value="Paraguay">Paraguai</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Filipinas</option>
                  <option value="Poland">Polónia</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Roménia</option>
                  <option value="Russia">Rússia</option>
                  <option value="Rwanda">Ruanda</option>
                  <option value="Saudi Arabia">Arábia</option>
                  <option value="Scotland">Escócia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Sérvia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Leone</option>
                  <option value="Singapore">Singapura</option>
                  <option value="Slovakia">Eslováquia</option>
                  <option value="Slovenia">Eslovénia</option>
                  <option value="Solomon Islands">Ilhas</option>
                  <option value="Somalia">Somália</option>
                  <option value="South Africa">África</option>
                  <option value="South Korea">Coreia</option>
                  <option value="Spain">Espanha</option>
                  <option value="Sri Lanka">Lanka</option>
                  <option value="Sudan">Sudão</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Suazilândia</option>
                  <option value="Sweden">Suécia</option>
                  <option value="Switzerland">Suíça</option>
                  <option value="Syria">Síria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tanzania">Tanzânia</option>
                  <option value="Thailand">Tailândia</option>
                  <option value="Togo">Togo</option>
                  <option value="Trinidad and Tobago">Tobago</option>
                  <option value="Tunisia">Tunísia</option>
                  <option value="Turkey">Turquia</option>
                  <option value="Turkmenistan">Turquemenistão</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ucrânia</option>
                  <option value="United Arab Emirates">Emirados</option>
                  <option value="United Kingdom">Kingdo</option>
                  <option value="United States of America">América</option>
                  <option value="Uruguay">Uruguai</option>
                  <option value="Uzbekistan ">Uzbequistão</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican">Vaticano</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietname</option>
                  <option value="Western Samoa">Samoa</option>
                  <option value="Yemen ">Iémen </option>
                  <option value="Yugoslavia ">Jugoslávia </option>
                  <option value="Zaire">Zaire</option>
                  <option value="Zambia">Zâmbia</option>
                  <option value="Zimbabwe">Zimbabué</option>
                </select>
              </ContainerSelect>
            </ContainerFilterSearch>
          }
        </ContainerFilter>

        {renderSwitch(valueRadio)}

      <Footer />
    </Container>
  );
}