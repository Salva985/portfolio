/* import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md mb-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">Salvatore Marchese</h1>

        
        <ul className="flex list-none m-0 p-0 space-x-10">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 underline'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 text-sm border border-blue-600 dark:border-blue-400 rounded"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  )
} */

  import React from 'react'
  import { NavLink } from 'react-router-dom'
  
  export default function Navbar({ darkMode, toggleDarkMode }) {
    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Projects', path: '/projects' },
      { name: 'Contact', path: '/contact' },
    ]
  
    return (
      <nav className="w-full bg-white dark:bg-black shadow-md mb-6 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left: Name */}
          <h1 className="text-lg font-bold text-gray-800 dark:text-white transition-colors duration-300">
            Salvatore Marchese
          </h1>
  
          {/* Center: Nav Links */}
          <ul className="flex list-none m-0 p-0 space-x-10">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 underline'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
                    }`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
  
          {/* Right: Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-1 text-sm border border-blue-600 dark:border-blue-400 rounded transition-colors duration-300"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    )
  }