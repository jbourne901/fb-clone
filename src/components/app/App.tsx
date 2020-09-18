import React from 'react';
import './App.css';
import Header from "../header";
import Sidebar from "../sidebar";
import Feed from "../feed";
import Widgets from "../widgets";
import Login from "../login";
import useStateValue  from "../state-provider";

const App = () => {
  const p = useStateValue();
  const state = p.state;
  let ctl=(
    <Login />
  );
  if(state && state.user) {
    ctl = (          
          <div className="app">
            <Header />
            <div className="app-body">
              <Sidebar />
              <Feed />  
              <Widgets />      
            </div>
          </div>      
    );
  }  
  return ctl;
}

export default App;
