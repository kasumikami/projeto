import React from 'react'
import ReactDOM from "react-dom";
import { Card } from "react-bootstrap";
import Dados from "./Dados";

function Estado(){
fetch("https://covid19-brazil-api.now.sh/api/report/v1", {
  "method": "GET"
}).then(response => console.log(response)).catch(err => console.error(err));
}

Dados()

export default Estado