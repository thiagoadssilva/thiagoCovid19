import React, { useState, useEffect } from 'react';
import HeaderMenu from '../HeaderMenu';
import Footer from '../Footer';
import Chart from 'react-google-charts';
import Api from '../../services/Api';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import {
  Container,
  ContainerGraphic
} from './styled';

export default () => {

  const [result, setResult] = useState([]);
  const chartData = [['', '']];
  const [valueRadio, setValueRadio] = useState('cases');

  useEffect(() => {
    async function handleLoadInformation() {
      try {
        let { data } = await Api.get('countries');
        setResult(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    handleLoadInformation();
  }, []);

  function handleChangeRadio(event) {
    setValueRadio(event.target.value);
  }

  if (valueRadio === 'cases') {
    result.map(item => {
      chartData.push([item.country, item.cases]);
    })
  } else if (valueRadio === 'confirmed') {
    result.map(item => {
      chartData.push([item.country, item.confirmed]);
    })
  } else if (valueRadio === 'deaths') {
    result.map(item => {
      chartData.push([item.country, item.deaths]);
    })
  } else if (valueRadio === 'recovered') {
    result.map(item => {
      chartData.push([item.country, item.recovered]);
    })
  }


  return (
    <Container>

      <HeaderMenu />

        <ContainerGraphic>
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={valueRadio} onChange={handleChangeRadio} >
              <FormControlLabel style={{ margin: 0 }} value="cases" control={<Radio size='small' />} label="Casos" />
              <FormControlLabel style={{ margin: 0 }} value="confirmed" control={<Radio size='small' />} label="Confirmados" />
              <FormControlLabel style={{ margin: 0 }} value="deaths" control={<Radio size='small' />} label="Mortos" />
              <FormControlLabel style={{ margin: 0 }} value="recovered" control={<Radio size='small' />} label="Recuperados" />
            </RadioGroup>
          </FormControl>

          <Chart
            width={'90%'}
            chartType="GeoChart"
            data={chartData}
            options={{
              title: "Mapa da Covid",
              colorAxis: { colors: ['#02C39A', '#00A896', '#028090'] },
              backgroundColor: '#FFFFFF',
              defaultColor: '#CCCCCC',
            }}
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            mapsApiKey="AIzaSyDESaxjIkBlzXlsFcMC5cKlk4_LHNMp74I"
            rootProps={{ 'data-testid': '2' }}
          />
        </ContainerGraphic>

      <Footer />

    </Container>
  );
}