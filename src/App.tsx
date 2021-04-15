import { AcademicCapIcon, ExternalLinkIcon, MenuIcon } from '@heroicons/react/outline'
import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import GPG from './views/GPG'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Projects from './views/Projects'
import Social from './views/Social'

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
      <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-6 flex-grow max-w-5xl">
          <nav className="mt-4 flex flex-row justify-between">
            <Link
              className="flex lg:p-2 py-2 rounded items-center lg:hover:bg-gray-100 lg:hover:dark:bg-gray-800"
              to="/"
            >
              <AcademicCapIcon className="mr-4 w-5 h-5" />
              <span>Home</span>
            </Link>

            {/* Navigation on desktop devices */}
            <div className="hidden md:flex">
              <Link
                className="text-blue-700 dark:text-yellow-400 p-2 mr-2 rounded hover:bg-blue-50 hover:dark:bg-gray-800"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-blue-700 dark:text-yellow-400 p-2 mr-2 rounded hover:bg-blue-50 hover:dark:bg-gray-800"
                to="/social"
              >
                Social
              </Link>
              <Link
                className="text-blue-700 dark:text-yellow-400 p-2 rounded hover:bg-blue-50 hover:dark:bg-gray-800"
                to="/gpg"
              >
                GPG
              </Link>
            </div>
            <a
              className="bg-pink-100 text-pink-700 p-2 rounded bg-opacity-40 hover:bg-opacity-80 dark:bg-opacity-10 dark:hover:bg-opacity-20 hidden md:block"
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
              <MenuIcon className="w-5 h-5" />
            </button>
            <CSSTransition in={showMenu} timeout={300} classNames="menu" unmountOnExit nodeRef={menuRef}>
              <div className="absolute top-0 right-0" ref={menuRef}>
                <div className="flex flex-col space-y-4 m-3 p-4 rounded bg-white dark:bg-gray-800 shadow-xl">
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
                    <ExternalLinkIcon className="w-5 h-5" />
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
