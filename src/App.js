import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import RestaurantSearch from '../components/RestaurantSearch';
import NewRestaurantForm from '../components/NewRestaurantForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={RestaurantSearch} />
        <Route path="/new-restaurant" component={NewRestaurantForm} />
      </Switch>
    </Router>
  );
}

export default App;
