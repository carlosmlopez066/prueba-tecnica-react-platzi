import React from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { HomeIcon } from '@heroicons/react/24/solid'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
import Modal from "../../Modal"
const Menu = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <NavLink to='/' className='flex gap-5' onClick={context.setOpenMobileMenu(false)}>
        <ArrowUturnLeftIcon className='items-start h-8 w-8 text-black' />
        <HomeIcon className='items-start h-8 w-8 text-black' />
      </NavLink>
      <ul className="flex flex-col gap-6 mt-10 text-xl font-semibold">
        <div className='flex flex-col gap-6 max-md:hidden max-sm:flex'>
          <li>
            <NavLink
              to='/'
              onClick={() => context.setSearchByCategory()}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clothes'
              onClick={() => context.setSearchByCategory('clothes')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/electronics'
              onClick={() => context.setSearchByCategory('electronics')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/furnitures'
              onClick={() => context.setSearchByCategory('furnitures')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/toys'
              onClick={() => context.setSearchByCategory('toys')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/others'
              onClick={() => context.setSearchByCategory('others')}
              className={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
              Others
            </NavLink>
          </li>
          <li className='text-black/60'>
            {context.userIsLog ? localStorage.getItem('emailUser') : context.userEmail}
          </li>
        </div>


        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            My Account
          </NavLink>
        </li>
        <li className={context.userIsLog ? 'hidden' : undefined
        }>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Sign In
          </NavLink>
        </li>
        <li
          className={!context.userIsLog ? 'hidden' : undefined}
          onClick={() => context.setOpenModal(true)}
        >
          <span className='cursor-pointer'
          >
            sign out
          </span>
        </li>

      </ul>
      {
        context.openModal && (
          <Modal />)
      }
    </Layout>
  )
}
export default Menu