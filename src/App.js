import React from "react";
import ReactDOM from "react-dom";
import Estado from "./Estado";

export default function App() {
  return ( 
    <img src="https://covid.celcoin.com.br/wp-content/uploads/2020/03/celcoin-covid.png" width="350px"/>
    <button onClick={Estado}>Estado</button>
  );
}
