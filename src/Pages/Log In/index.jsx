import React from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"
const LogIn = () => {
  const context = useContext(ShoppingCartContext)

  const LogInUser = () => {
    if (context.userEmail === localStorage.getItem('emailUser')) {
      console.log('Log desde el Log In', localStorage.getItem('emailUser'))
      localStorage.setItem('isLog', true)
      context.setUserIsLogState(true)
    } else {
      return (
        <Layout>
          <p>You need to Sign In</p>
        </Layout>
      )
    }
  }

  return (
    <Layout>
      <div className=' SignIn w-full  flex justify-center items-start'>
        <form className='flex flex-col justify-center items-center w-80'>
          <div className='flex flex-col justify-center items-start '>
            <label alt='email' className='font-semibold text-lg'>Email</label>
            <input type='email' alt='email' className='my-3 p-2 h-10 border border-black border-solid rounded-lg' value={context.userEmail} onChange={(event) => context.setUserEmail(event.target.value)} />

            <label alt='password' className='font-semibold text-lg'>Password</label>
            <input type='password' alt='password' className='my-3 p-2 h-10 border border-black border-solid rounded-lg' />
          </div>
          <NavLink to={'/'}>
            <button
              type='button'
              className='my-3 text-xl  font-bold border border-none bg-gray-400 rounded-xl p-3 w-48 cursor-pointer hover:bg-gray-700 hover:text-white'
              onClick={() => LogInUser()}
            >
              Log In
            </button>
          </NavLink>
        </form>
      </div>
      {context.openModal && (
        <Modal />)}
    </Layout>
  )
}
export default LogIn