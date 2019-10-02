import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Navbar} from "./Components/Navbar/Navbar";
import {Home} from "./Components/Home/Home";
import {Room} from "./Components/Room/Room";
import SingleRoomContainer from "./Components/SingleRoom/SingleRoomContainer";

function App() {
  return (
      <>
        <Navbar/>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/rooms/" component={Room} />
          <Route exact path="/rooms/:slug" component={SingleRoomContainer} />
        </Switch>
      </>
  );
}

export default App;
