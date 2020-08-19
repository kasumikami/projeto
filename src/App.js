import React from "react";
import ReactDOM from "react-dom";
import Estado from "./Estado";

export default function App() {
  return (
    <>
    <div>
    <Form>
    <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    </Form>
    <img src="https://covid.celcoin.com.br/wp-content/uploads/2020/03/celcoin-covid.png" width="350px"/>
    <button onClick={Estado}>Estado</button>
    </div>
    </>
  );
}
