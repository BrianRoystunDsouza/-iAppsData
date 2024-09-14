import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Sidebar from './Component/SideBar/Sidebar';
import Dashboard from './Component/DashBoard/DashBoard';
import Employee from './Component/AllEmployee/Employee';
import Department from './Component/Department/Department';
import Leave from './Component/Leaves/leave';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>

          <div class="grid-container">
            <div class="item2">
              <Sidebar />
            </div>
            <div style={{ height: '100%' }} class="item3">
              <Route path="/home" exact component={Dashboard} />
              <Route path="/AllEmployees" exact component={Employee} />
              <Route path="/AllDepartment" exact component={Department} />
              <Route path="/Attendance" exact component={Leave} />
            </div>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
