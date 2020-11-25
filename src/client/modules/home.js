// vendor modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.array,
    ]),
  };

  state = {};

  render() {
    const { children } = this.props;

    return (
      <div className="home">
        {children}
      </div>
    );
  }
}

export default Home;
