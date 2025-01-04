import React from 'react'
import { useRoutes, BrowserRouter as Router, Link } from 'react-router-dom'
import routes from './router'

function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

function App() {
  return (
    <Router>
      <div>
        <div className="p-4">
          <div className="relative group">
            <ul className="flex flex-wrap gap-4 items-center">
              <li className="hover:-translate-y-1 transition-transform">
                <Link
                  to="/observer"
                  className="text-blue-500 hover:text-blue-700 text-lg font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  Observer
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-transform">
                <Link
                  to="/loadLazyPage"
                  className="text-blue-500 hover:text-blue-700 text-lg font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  LoadLazyPage
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-transform">
                <Link
                  to="/distance"
                  className="text-blue-500 hover:text-blue-700 text-lg font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  Distance
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-transform">
                <Link
                  to="/useGesture"
                  className="text-blue-500 hover:text-blue-700 text-lg font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  UseGesture
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-transform">
                <Link
                  to="/transitionGroup"
                  className="text-blue-500 hover:text-blue-700 text-lg font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  TransitionGroup
                </Link>
              </li>
              <li className="hover:-translate-y-1 transition-transform">
                <Link
                  to="/colorPicker"
                  className="text-blue-500 hover:text-blue-700 text-lg font-medium px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  ColorPicker
                </Link>
              </li>
            </ul>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors md:hidden"
              onClick={() => {
                const ul = document.querySelector('ul')
                ul?.classList.toggle('h-auto')
                ul?.classList.toggle('h-12')
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
