import api from "./api";
import { useEffect } from "react";
function ProvaSyscoin() {
    <h1>teste</h1>
        useEffect(()=>{
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
           
          },[]);
 }
  
  export default ProvaSyscoin;