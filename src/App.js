import React, { Component } from 'react';
import api from './api';

class App extends Component {



  async componentDidMount() {
    const response = await api.get('provasyscoin?user="syscoin"&password="meEscolhe"', {
      auth: {
        username: 'syscoin',
        password: 'meEscolhe'
      }
    }
    ).then((response) => alert(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
   });
  }

  render() {

    return (
      <div>
        componentDidMount();
      </div>
    );
  };
};

export default App;
