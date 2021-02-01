import React from 'react';
import { useRoutes } from 'hookrouter';

import HomeScreen from './components/HomeScreen';
import Home from './components/Home';

const routes ={
  '/home': () => <Home />,
  '/homeScreen': () => <HomeScreen />
}

function App() {
  return (useRoutes(routes));
}

export default App;
