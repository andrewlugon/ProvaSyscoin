import api from "./api";
import { useEffect } from "react";
function ProvaSyscoin() {
        useEffect(()=>{
            api.get('provasyscoin?user="syscoin"&password="meEscolhe"', {
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