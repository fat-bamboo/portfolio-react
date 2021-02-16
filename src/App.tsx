import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AcademicCapOutline } from "heroicons-react";

import Home from './views/Home'
import Projects from './views/Projects'

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <div className="mt-4 flex flex-row justify-between">
          <div className="flex">
            <AcademicCapOutline className="mr-4" />
            <Link to="/">Portfolio</Link>
          </div>

          <div className="flex">
            <Link className="mr-2" to="/projects">
              Projects
            </Link>
            <Link className="mr-2" to="/">About</Link>
            <Link to="/">About</Link>
          </div>

          <div className="">Get in touch</div>
        </div>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
