import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import Home from './components/Home';
import About from './components/About';
import PanelCovid from './components/PanelCovid';
import Information from './components/Information';
import Graphic from './components/Graphic';

const routes ={
  '/': () => <HomeScreen />,
  '/home': () => <Home />,
  '/sobre': () => <About />,
  '/painelCovid': () => <PanelCovid />,
  '/graficos': () => <Graphic />,
  '/information/:id': ({id}) => <Information id={id}/>
  
}

function App() {
  return (useRoutes(routes));
}

export default App;
