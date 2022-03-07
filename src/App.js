import React from "react";
import HeaderNav from "./Components/HeaderNav";
import HomeScreen from "./Components/HomeScreen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Detail from "./Components/Detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/detail/:id" exact component={Detail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
