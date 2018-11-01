import React, {Component} from 'react';
import Menu from './Menu';

// var loggedIn= sessionStorage.getItem('logged');

class Dashboard extends Component {

  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}


  render() {
    return (
      <Menu />
    );
  }
}

export default Dashboard;
