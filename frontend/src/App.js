import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import Home from './components/Home';

const routes ={
  '/': () => <HomeScreen />,
  '/home': () => <Home />
}

function App() {
  return (useRoutes(routes));
}

export default App;
