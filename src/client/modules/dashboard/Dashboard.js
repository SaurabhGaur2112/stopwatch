// vendor modules
import React, { Component } from 'react';
// component modules
import Stopwatch from '../../components/Stopwatch';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__content">
          <div className="dashboard__section">
            <div className="dashboard__header">
              <div className="dashboard__header-title">Stopwatch</div>
            </div>
            <div className="dashboard__desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            <Stopwatch />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
