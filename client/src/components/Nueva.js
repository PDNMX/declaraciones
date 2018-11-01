import React, {Component} from 'react';
import axios from 'axios';
import config from '../config.json';

import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

import Card from './Card';
import Card2 from './Card2';
import Menu from './Menu';


// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';

// var loggedIn= sessionStorage.getItem('logged');

const Styles=theme=>({root:{
  paddingTop:'100px'
}});

// const divstyle = {
//   "marginTop": "250px"
// };


class Nueva extends Component {

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

    axios.post(apiBaseUrl + 'Nueva', payload).then(function(response) {
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
    const {classes}=this.props;
    return(
      <div>
        <Menu />
        <Grid container spacing={24} justified="center" className={classes.root}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4} >
            <Card/>
            </Grid>
            <Grid item xs={4}><Card2/></Grid>
          </Grid>
      </div>
    );
  }
}

export default withStyles(Styles)(Nueva);
