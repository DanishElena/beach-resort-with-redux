import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {Home} from "./Components/Home/Home";
import {Room} from "./Components/Room/Room";
import {SingleRoom} from "./Components/SingleRoom/SingleRoom";

function App() {
  return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/rooms/" component={Room} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
        </Switch>
      </>
  );
}

export default App;
