import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MapCreator } from './components/mapCreator';

import './App.css';

function App() {
  return (
    <Provider store = { store }>
      <MapCreator />
    </Provider>
  );
}

export default App;
