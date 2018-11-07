import React, {Component} from 'react';
import {Container, Row, Col, Input, Button, Card, CardTitle, CardBody} from 'mdbreact';
import axios from 'axios';
import config from '../config.json';
import { Redirect } from 'react-router'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

var loggedIn= sessionStorage.getItem('logged');


const divstyle = {
  "marginTop": "150px"
};


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      usuario: "",
      clave: "",
      message:"",
      type:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleClick(event) {

    var apiBaseUrl = config.apiHost+"users/";
    var self = this;
    var payload = {
      "usuario": this.state.usuario,
      "clave": this.state.clave,
    }
    var info;
    // console.log(payload);

    axios.post(apiBaseUrl + 'login', payload).then(function(response) {
      // console.log(response);
      switch (response.data.code) {
        case 200:
          info={message: 'inicio correcto.',type:"alert alert-success text-center"};
          self.setState(info);
          sessionStorage.setItem('logged',true);
          window.location.reload();
          break;
        case 204:
        info={message: 'El usuario y/o contrasena son incorrectos.',type:"alert alert-danger text-center"};
        self.setState(info);
        sessionStorage.setItem('logged',false);
        break;
        case 205:
        info={message: 'El usuario y/o contrasena son incorrectos.',type:"alert alert-danger text-center"};
        self.setState(info);
        sessionStorage.setItem('logged',false);
          break;
        default:
          info={message: 'hubo un error en la consulta',type:"alert alert-danger text-center"};
          self.setState(info);
          sessionStorage.setItem('logged',false);
      }
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    if (!loggedIn) {
      return(
        <Container style={divstyle}>
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Card>
                <CardTitle className="text-center">
                  <br/>
                  <img src="./images/logo_pdn.png" className="img-fluid" alt="PDN" />
                </CardTitle>
                <CardBody>
                <div id="messages" className={this.state.type}>{this.state.message}</div>
                <form autoComplete="off">
                  <div className="grey-text">
                    <Input id="usuario" label="usuario" icon="envelope" group type="text" validate error="wrong" success="right" value={this.state.usuario} onChange={this.handleChange}/>
                    <Input id="clave" label="contrase&ntilde;a" icon="lock" group type="password" validate value={this.state.clave} onChange={this.handleChange}/>
                  </div>
                  <div className="text-center">
                    <Button onClick={(event) => this.handleClick(event)}>Ingresar</Button>
                  </div>
                </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return(<Redirect to="/" />);
    }
  }
}

export default Login;
