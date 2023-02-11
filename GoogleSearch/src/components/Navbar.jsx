import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';

const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center item-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className='text-3xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>Gugal 🔍</p>
        </Link>
        <button type="button" onClick={() => { setDarkTheme(!darkTheme)}} className="text-lg font-light dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full p-2 hover:shadow-lg">
          {darkTheme ? 'Light💡' : 'Dark 🌑'}
        </button>
      </div>
      <Search />
    </div>
  )
}

export default Navbar
