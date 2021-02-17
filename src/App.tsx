import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AcademicCapOutline, MenuOutline, MailOutline } from 'heroicons-react'

import Home from './views/Home'
import Projects from './views/Projects'
import NotFound from './views/NotFound'
import Social from './views/Social'
import GPG from './views/GPG'

const App = () => {
  const currentYear: number = new Date().getFullYear()
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-6 flex-grow max-w-5xl">
          <nav className="mt-4 flex flex-row justify-between">
            <Link className="flex p-2 rounded hover:bg-gray-100" to="/">
              <AcademicCapOutline className="mr-4" />
              <span>Home</span>
            </Link>
            {/* Navigation on desktop devices */}
            <div className="flex hidden md:block">
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
              className="bg-pink-50 text-pink-700 p-2 rounded hover:bg-pink-100 hidden md:block"
              href="mailto:spencer.wushangbo@gmail.com"
            >
              Get in touch
            </a>
            {/* Navigation on mobile devices (dropdown menu) */}
            <button className="md:hidden p-2" onClick={toggleMenu}>
              <MenuOutline />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-0 flex flex-col space-y-4 m-6 p-4 rounded bg-white shadow-xl">
                <Link className="" to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
                <Link className="" to="/social" onClick={toggleMenu}>
                  Social
                </Link>
                <Link className="" to="/gpg" onClick={toggleMenu}>
                  GPG
                </Link>
                <a className="flex items-center" href="mailto:spencer.wushangbo@gmail.com" onClick={toggleMenu}>
                  <span className="mr-2">Get in touch</span>
                  <MailOutline size={20} />
                </a>
              </div>
            )}
          </nav>

          <div className="my-16">
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
        <footer className="w-full text-center bg-gray-800 text-gray-400 p-4">
          <div className="container mx-auto">
            <div>
              Powered by{' '}
              <a className="hover:text-white" href="https://reactjs.org/">
                React
              </a>
              ,{' '}
              <a className="hover:text-white" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>
              ,{' '}
              <a className="hover:text-white" href="https://vitejs.dev/">
                Vite
              </a>{' '}
              and{' '}
              <a className="hover:text-white" href="https://www.typescriptlang.org/">
                TypeScript.
              </a>
            </div>
            <div>Spencer Woo © 2019-{currentYear}</div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
