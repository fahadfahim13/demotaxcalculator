import React from 'react';
import BasicForm from './components/BasicForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ThirdForm from './components/ThirdForm';
import IncomeForm from './components/IncomeForm';
import Admin from './components/AdminPanel/Admin';
import showUser from './components/AdminPanel/showUser';
import Error from './components/AdminPanel/Error';

function App() {
  return (
    <Router>
    <div className="container">
      <Switch>
          <Route exact path="/" component={BasicForm} />
          <Route exact path="/second_form" component={IncomeForm} />
          <Route exact path="/third_form" component={ThirdForm} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/users" component={showUser} />
          <Route exact path="/error" component={Error} />
        </Switch>
      {/* <BasicForm /> */}
    </div>
    </Router>
  );
}

export default App;
