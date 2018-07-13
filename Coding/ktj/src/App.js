import React, { Component } from "react";
import Banner from "../src/components/Banner";
import Nav from "../src/components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Row, Col, Container } from "../src/components/Grid";

const App = props => (
  <Router>
    <Container>
      <div>
        <Row>
          <Col size="md-9">
          <Banner />
          </Col>
          <Col size="md-3">
          <Nav />
          </Col>
        </Row>
      </div>
    </Container>
  </Router>
);

export default App;
