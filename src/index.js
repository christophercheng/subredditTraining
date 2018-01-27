import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import storeFactory from './redux/store-factory';

const store = storeFactory();

/*
const render = () => ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'));
*/

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
