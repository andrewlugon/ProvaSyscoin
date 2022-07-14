import api from "./api";
import axios from 'axios';

function App() {
  api.get('user="syscoin"&password="meEscolhe"', {
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

export default App;
