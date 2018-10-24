import React from 'react'
import { Switch, Route } from "react-router-dom"
import home from "./ReactViews/home"
import search from "./ReactViews/search"

import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path={"/"} component={home} />
          <Route exact path={"/search"} component={search} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
