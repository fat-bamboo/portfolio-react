import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { AcademicCapOutline, MenuOutline, ExternalLinkOutline } from 'heroicons-react'

import Home from './views/Home'
import Projects from './views/Projects'
import NotFound from './views/NotFound'
import Social from './views/Social'
import GPG from './views/GPG'

const App = () => {
  const currentYear: number = new Date().getFullYear()
  const [showMenu, setShowMenu] = useState(false)

  // TO-DO: this should be refactored
  const menuRef = useRef<any>(null)
  const buttonRef = useRef<any>(null)

  const closeMenu = () => {
    setShowMenu(false)
  }
  const handleToggleMenu = (e: MouseEvent) => {
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      return
    }
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      closeMenu()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleToggleMenu)
    return () => {
      document.removeEventListener('click', handleToggleMenu)
    }
  }, [])

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="container mx-auto px-6 flex-grow max-w-5xl">
          <nav className="mt-4 flex flex-row justify-between">
            <Link className="flex lg:p-2 py-2 rounded lg:hover:bg-gray-100" to="/">
              <AcademicCapOutline className="mr-4" />
              <span>Home</span>
            </Link>

            {/* Navigation on desktop devices */}
            <div className="hidden md:flex">
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
            <button
              className="md:hidden p-2"
              ref={buttonRef}
              onClick={() => {
                setShowMenu(true)
              }}
            >
              <MenuOutline />
            </button>
            <CSSTransition in={showMenu} timeout={300} classNames="menu" unmountOnExit nodeRef={menuRef}>
              <div className="absolute top-0 right-0" ref={menuRef}>
                <div className="flex flex-col space-y-4 m-3 p-4 rounded bg-white shadow-xl">
                  <Link to="/projects" onClick={closeMenu}>
                    Projects
                  </Link>
                  <Link to="/social" onClick={closeMenu}>
                    Social
                  </Link>
                  <Link to="/gpg" onClick={closeMenu}>
                    GPG
                  </Link>
                  <a className="flex items-center" href="mailto:spencer.wushangbo@gmail.com" onClick={closeMenu}>
                    <span className="mr-2">Get in touch</span>
                    <ExternalLinkOutline size={20} />
                  </a>
                </div>
              </div>
            </CSSTransition>
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
