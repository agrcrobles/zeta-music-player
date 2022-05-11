import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import Search from "./search/Search";
import Player from "./player/Player";
import Header from "./header/SearchBar";

export default function Router() {
  return (
    <MemoryRouter>
      <Switch>
        <Route path="/player">
          <Header />
          <Player />
        </Route>
        <Route path="/">
          <Header />
          <Search />
        </Route>
      </Switch>
    </MemoryRouter>
  );
}
