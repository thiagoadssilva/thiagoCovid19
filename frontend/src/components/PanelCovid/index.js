import React, { useState, useEffect } from 'react';
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
  ContainerFilterSearch
} from './styled';

export default () => {
  const [information, setInformation] = useState([]);
  const [valueRadio, setValueRadio] = useState('states');

  function handleChangeRadio(event) {
    setValueRadio(event.target.value);
  }

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


        <ContainerFilterSearch>
          <Form>
            <Form.Group>
              <Form.Label style={{margin: '15px'}}>Informe o seu estado ou país:</Form.Label>
              <Form.Control style={{backgroundColor: '#85C3FF', borderRadius: '5px', margin: '15px', width: '1050px'}} type="text" />
            </Form.Group>
          </Form>
          <Button style={{backgroundColor: '#85C3FF'}} type="submit">
            Pesquisar
          </Button>
        </ContainerFilterSearch>



      </ContainerFilter>

      {information.map(item =>
        <div key={item.uid}>
          {/* {console.log(item)} */}
          <PanelCovidItem item={item} />
        </div>

      )}
      <Footer />
    </Container>
  );
}