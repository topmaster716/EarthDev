import React from "react";
import { Redirect, Route } from "react-router";

import PrimaryView from "../../pages/home/views/index";
import NotFoundView from "../../pages/not_found";

export default function configRoutes(store) {
  return (
    <Route>

      <Route path="/" component={PrimaryView} />
      <Route path="/not_found" component={NotFoundView} />
      <Redirect from="*" to="/not_found" />

    </Route>
  );
}
