import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import Home from './components/Home';
import About from './components/About';

const routes ={
  '/home': () => <Home />,
  '/homeScreen': () => <HomeScreen />,
  '/sobre': () => <About />
}

function App() {
  return (useRoutes(routes));
}

export default App;
