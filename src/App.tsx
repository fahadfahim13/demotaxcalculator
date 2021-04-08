import React from 'react';
import BasicForm from './components/BasicForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ThirdForm from './components/ThirdForm';
import IncomeForm from './components/IncomeForm';

function App() {
  return (
    <Router>
    <div className="container">
      <Switch>
          <Route exact path="/" component={BasicForm} />
          <Route exact path="/second_form" component={IncomeForm} />
          <Route exact path="/third_form" component={ThirdForm} />
        </Switch>
      {/* <BasicForm /> */}
    </div>
    </Router>
  );
}

export default App;
