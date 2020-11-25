// vendor modules
import React from 'react';
import { render } from 'react-dom';
import { AppContainer as HotReloadContainer } from 'react-hot-loader';
// helper modules
import { history } from './helpers/history';
// react modules
import RootContainer from './rootContainer';
// utility modules
import getRoutes from './routes';
// css modules
import './assets/scss/main.scss';

const rootElement = document.getElementById('app');

render((
  <HotReloadContainer>
    <RootContainer
      history={history}
      routes={getRoutes()}
    />
  </HotReloadContainer>
), rootElement);
