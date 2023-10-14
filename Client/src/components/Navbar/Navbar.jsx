import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
import { DarkThemeToggle } from 'flowbite-react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown, Navbar, Avatar } from 'flowbite-react'
import Logo from '../../assets/Logo.png'
import { logOut } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
// const Header = () => {

//   return (
//     <Navbar
//       fluid
//       rounded
//     >
//       <Navbar.Brand href="">
//         <img
//           src={Logo}
//           className="mr-3 h-6 sm:h-9"
//           alt="DevSikShaHub logo"
//         />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
//           DevSikShaHub
//         </span>
//       </Navbar.Brand>
//       {userInfo && (
//         <div className="flex md:order-2">
//           <Dropdown
//             Hello
//             arrowIcon={false}
//             className="z-[10000]"
//             inline
//             label={
//               <Avatar
//                 alt="User settings"
//                 img={Logo}
//                 rounded
//               />
//             }
//           >
//             <Dropdown.Header>
//               <span className="block text-sm">Bonnie Green</span>
//               <span className="block truncate text-sm font-medium">
//                 sakl;dfjasd
//               </span>
//             </Dropdown.Header>
//             <Dropdown.Item>Profile</Dropdown.Item>
//             <Dropdown.Item>Settings</Dropdown.Item>
//             <Dropdown.Item>Earnings</Dropdown.Item>
//             <Dropdown.Divider />
//             <Dropdown.Item
//               onClick={() => {
//                 dispatch(logOut(null))
//                 navigate('/login')
//               }}
//             >
//               Log out
//             </Dropdown.Item>
//           </Dropdown>
//         </div>
//       )}
//       <Navbar.Toggle />
//       <Navbar.Collapse>
//         <Navbar.Link
//           to={'/'}
//           active
//         >
//           Home
//         </Navbar.Link>
//         <Navbar.Link to={'/courses'}>Courses</Navbar.Link>
//         <Navbar.Link href="#">About</Navbar.Link>
//         <Navbar.Link href="#">Services</Navbar.Link>
//         <Navbar.Link href="#">Pricing</Navbar.Link>
//         {!userInfo && (
//           <>
//             <Navbar.Link
//               to={'/login'}
//               href="#"
//             >
//               Login
//             </Navbar.Link>
//             <Navbar.Link
//               to={'/register'}
//               href="#"
//             >
//               Register
//             </Navbar.Link>
//           </>
//         )}
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }

// export default Header

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setUserMenuOpen] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if (userInfo) {
    const { name } = userInfo
  }
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen)
  }

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to={'/'}
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  
                >
                  Home
                </NavLink>
                <NavLink to={"/courses"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Courses
                </NavLink>
                <NavLink
                  to={"/"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </NavLink>
                <NavLink
                  to={"/"}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Roadmaps
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus-ring-2 focus-ring-white focus-ring-offset-2 focus-ring-offset-gray-800"
            ></button>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  onClick={toggleUserMenu}
                  className="relative flex rounded-full bg-gray-800 text-sm focus-outline-none focus-ring-2 focus-ring-white focus-ring-offset-2 focus-ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
              <div
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus-outline-none ${
                  isUserMenuOpen ? 'block' : 'hidden'
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  onClick={() => {
                    dispatch(logOut(null))
                    navigate('/login')
                  }}
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
