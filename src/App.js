import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom"
import HomePage from './components/pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
  Hello BABABUE
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
