import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../page/Home";
import News from "../page/News";
import Contact from "../page/Contact";
import PostOffice from "../page/Postoffice";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/buucuc" component={PostOffice} />
    </Switch>
  );
};

export default Routes;
