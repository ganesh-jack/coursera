import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './HomeComponent';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    }
  }
  
  render(){
    const HomePage = () => {
      return(
          <Home />
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
