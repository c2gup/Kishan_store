import React from 'react'
import logo from '../../assets/Header/Logo.png'
import Cart from '../../assets/Header/Cart Icon.png'

import { Menu, X } from 'lucide-react'



const menuItems = [
      {
        name: 'Home',
        href: '#',
      },
      {
        name: 'About',
        href: 'About',
      },
      {
        name: 'Contact',
        href: 'Contact',
      },
      {
        name: 'Sope',
        href: 'Sope',
      },
      {
        name: 'SopePage',
        href: 'SopePage',
      },
      {
        name: 'Team',
        href: 'Our_team',
      },
      {
        name: 'DevLoperTeam',
        href: 'Team',
      },
    ]

function Header() {

      const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      






    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className='w-9'>
            <img src={logo} alt="" srcset="" />
          </span>
          <span className="font-bold text-[#274C5B] ">Organick</span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-sans font-medium text-[#274C5B] hover:text-[#3b829e]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach"
          ></input>
        </div>
        <div className="hidden lg:block">
           
          <button
            type="button"
            className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >

<img 
        src={Cart} 
        alt="My Button" 
        className="w-12 h-12 object-cover hover:opacity-80 transition duration-300"
      />
            
          </button>

        
        </div>

        <div className='text-[#274C5B] hidden lg:block ' > <span>Cart</span> (1)</div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-[#274C5B] ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                  <span className='w-9'>
            <img src={logo} alt="" srcset="" />
          </span>
                    <span className="font-bold text-[#274C5B] ">Organick</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-[#274C5B]">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
            type="button"
            className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >

<img 
        src={Cart} 
        alt="My Button" 
        className="w-12 h-12 object-cover hover:opacity-80 transition duration-300"
      />
            
          </button>

                
              </div>
              
            </div>
            
          </div>
        )}
      </div>
    </div>
 

    </div>
  )
}

export default Header
