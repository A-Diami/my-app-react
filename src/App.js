import React from 'react'
import Navbar from './components/layouts/navbar';
import Accueil from './components/pages/Accueil';
import Liste from './components/pages/Liste';
import Apropos from './components/pages/Apropos';
import Page404 from './components/pages/Page404';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddClients from './components/clients/AddClients';
import Edit from './components/clients/Edit';
import View from './components/clients/View';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
              <Route exact path="/" component={Accueil} />
              <Route exact path="/liste" component={Liste} />
              <Route exact path="/apropos" component={Apropos} />
              <Route exact path="/clients/add" component={AddClients} />
              <Route exact path="/clients/edit/:id" component={Edit} />
              <Route exact path="/clients/view/:id" component={View} />
              <Route component={Page404} />
          </Switch>
      </div>
    </Router>
    
  )
}
