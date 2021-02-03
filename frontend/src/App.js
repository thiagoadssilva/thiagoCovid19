import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import Home from './components/Home';
import About from './components/About';
import PanelCovid from './components/PanelCovid';

const routes ={
  '/home': () => <Home />,
  '/': () => <HomeScreen />,
  '/sobre': () => <About />,
  '/painelCovid': () => <PanelCovid />
}

function App() {
  return (useRoutes(routes));
}

export default App;
