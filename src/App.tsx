import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AcademicCapOutline } from 'heroicons-react'

import Home from './views/Home'
import Projects from './views/Projects'

function App() {
  return (
    <Router>
      <div className="container mx-auto px-6">
        <div className="mt-4 flex flex-row justify-between">
          <div className="flex p-2 pl-0">
            <AcademicCapOutline className="mr-4" />
            <Link to="/">Home</Link>
          </div>

          <div className="flex">
            <Link className="text-blue-700 p-2 mr-2 rounded" to="/projects">
              Projects
            </Link>
            <Link className="text-blue-700 p-2 mr-2 rounded" to="/">
              Social
            </Link>
            <Link to="/" className="text-blue-700 p-2 rounded">
              GPG
            </Link>
          </div>

          <a
            className="bg-pink-50 text-pink-700 p-2 rounded hover:bg-pink-100"
            href="mailto:spencer.wushangbo@gmail.com"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16">
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
