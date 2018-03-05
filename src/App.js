import React, { Component } from 'react';
import moment from 'moment';

const FORMAT = 'dddd, Do of MMMM YYYY - hh:mm a';

class App extends Component {
  state = {
    local: '',
    utc: '',
    cst: '',
    pst: '',
  };

  componentDidMount = () => {
    this.updateTimeZones();
  };

  updateTimeZones = () => {
    this.setState({
      local: `${moment().format(FORMAT)}`,
      utc: moment()
        .utc()
        .format(FORMAT),
      cst: moment()
        .utc()
        .subtract('hours', 6)
        .format(FORMAT),
      pst: moment()
        .utc()
        .subtract('hours', 7)
        .format(FORMAT),
    });

    setTimeout(() => {
      this.updateTimeZones();
    }, 60000);
  };

  render() {
    return (
      <div className="app">
        <div>
          <h1>Your own happy place</h1>
          <div>{this.state.local.split('-')[0]}</div>
          <div>{this.state.local.split('-')[1]}</div>
        </div>
        <div>
          <h1>UTC</h1>
          <div>{this.state.utc.split('-')[0]}</div>
          <div>{this.state.utc.split('-')[1]}</div>{' '}
        </div>
        <div>
          <h1>CST</h1>
          <div>{this.state.cst.split('-')[0]}</div>
          <div>{this.state.cst.split('-')[1]}</div>{' '}
        </div>
        <div>
          <h1>PST</h1>
          <div>{this.state.pst.split('-')[0]}</div>
          <div>{this.state.pst.split('-')[1]}</div>{' '}
        </div>
      </div>
    );
  }
}

export default App;
