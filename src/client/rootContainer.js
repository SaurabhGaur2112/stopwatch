// vendor modules
import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';

const RootContainer = ({ history, routes }) => (
  <HashRouter history={history}>
    {routes}
  </HashRouter>
);

RootContainer.propTypes = {
  history: PropTypes.object,
  routes: PropTypes.object,
};

export default RootContainer;
