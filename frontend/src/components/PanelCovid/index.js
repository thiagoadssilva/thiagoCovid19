import React, { useState, useEffect, useCallback } from 'react';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Api from '../../services/Api';
import PanelCovidItem from '../PanelCovidItem';
import { Form, Button } from 'react-bootstrap';
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
  const [uniqueState, setUniqueState] = useState();
  const [valueRadio, setValueRadio] = useState('states');
  const [displayControl, setDisplayControl] = useState(false);
  const [controlHeight, setControlHeight] = useState(true);

  function handleChangeRadio(event) {
    if (event.target.value === 'states') {
      setUniqueState('');
      setDisplayControl(true);
    }else{
      setDisplayControl(false);
    }
    setValueRadio(event.target.value);
  }

  // async function handleChangeSearch(event) {
  //   setInputSearch(event.target.value);
  //   const actualState = event.target.value;

  //   try {
  //     let { data } = await Api.get(`/brazil/uf/${actualState}`);
  //     console.log(data);
  //     setUniqueState(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleChangeSearch = useCallback(async (event) => {
    const actualState = event.target.value;

    try {
      let { data } = await Api.get(`/brazil/uf/${actualState}`);
      setUniqueState(data);
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    // async function getInformation() {
    //   try {
    //     let { data } = await Api.get();
    //     console.log(data);
    //     setInformation(data.data);

    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getInformation();
    setDisplayControl(true);
    Api.get("/")
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
              <PanelCovidItem item={item} />
            </div>
          ))
        )
      case 'brazil/uf/':
        if (!uniqueState) {
          return (
            information.map(item => (
              <div >
                <PanelCovidItem item={item} />
              </div>
            )))
        }
        return (
          <div>
            <PanelCovidItem item={uniqueState} controlHeight={controlHeight} />
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
            <RadioGroup aria-label="gender" name="gender1" value={valueRadio} onChange={handleChangeRadio}>
              <FormControlLabel style={{ margin: 0 }} value="states" control={<Radio size='small' />} label="Todos os Estados" />
              <FormControlLabel style={{ margin: 0 }} value="brazil/uf/" control={<Radio size='small' />} label="Por Estados" />
              <FormControlLabel style={{ margin: 0 }} value="countries" control={<Radio size='small' />} label="Todos os Países" />
              <FormControlLabel style={{ margin: 0 }} value="pais" control={<Radio size='small' />} label="Por País" />
            </RadioGroup>
          </FormControl>
        </ContainerFilterRadio>

        {!displayControl &&
          <ContainerFilterSearch>
            <ContainerSelectTitle>
              Informe um estado ou país:
          </ContainerSelectTitle>
            <ContainerSelect>
              <select style={{backgroundColor: '#85C3FF'}} onChange={handleChangeSearch} className="browser-default custom-select">
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
        }
      </ContainerFilter>
      {renderSwitch(valueRadio)}

      <Footer />
    </Container>
  );
}