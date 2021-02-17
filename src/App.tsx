import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AcademicCapOutline } from 'heroicons-react'

import Home from './views/Home'
import Projects from './views/Projects'
import NotFound from './views/NotFound'
import Social from './views/Social'
import GPG from './views/GPG'

function App() {
  const currentYear: number = new Date().getFullYear()

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-6 flex-grow">
          <nav className="mt-4 flex flex-row justify-between">
            <Link className="flex p-2 rounded hover:bg-gray-100" to="/">
              <AcademicCapOutline className="mr-4" />
              <span>Home</span>
            </Link>

            <div className="flex">
              <Link className="text-blue-700 p-2 mr-2 rounded hover:bg-blue-50" to="/projects">
                Projects
              </Link>
              <Link className="text-blue-700 p-2 mr-2 rounded hover:bg-blue-50" to="/social">
                Social
              </Link>
              <Link className="text-blue-700 p-2 rounded hover:bg-blue-50" to="/gpg">
                GPG
              </Link>
            </div>

            <a
              className="bg-pink-50 text-pink-700 p-2 rounded hover:bg-pink-100"
              href="mailto:spencer.wushangbo@gmail.com"
            >
              Get in touch
            </a>
          </nav>

          <div className="mt-16">
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/social">
                <Social />
              </Route>
              <Route path="/gpg">
                <GPG />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
        <footer className="w-full text-center bg-gray-800 text-white p-4">
          <div className="container mx-auto">Spencer Woo © 2019-{currentYear}</div>
        </footer>
      </div>
    </Router>
  )
}

export default App
