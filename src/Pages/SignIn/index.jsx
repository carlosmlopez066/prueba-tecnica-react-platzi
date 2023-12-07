import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import Modal from '../../Modal'
import './styles.css'

function SignIn() {
  const context = useContext(ShoppingCartContext)

  const signUp = () => {
    localStorage.setItem('isLog', true)
    context.setUserIsLogState(true)
  }
  const handleInputEmail = (event) => {
    context.setUserEmail(event)
    localStorage.setItem('emailUser', event)
  }
  return (
    <Layout>
      <div className=' SignIn w-full  flex justify-center items-start'>
        <form onSubmit={console.log('submit!!!!!!')} className='flex flex-col justify-center items-center w-80'>
          <div className='flex flex-col justify-center items-start '>
            <label alt='name' className='font-semibold text-lg'>Name</label>
            <input type='text' alt='name' className='my-3 p-2 h-10 border border-black border-solid rounded-lg ' />

            <label alt='email' className='font-semibold text-lg' id='emailUser'>Email</label>
            <input type='email' alt='email' className='my-3 p-2 h-10 border border-black border-solid rounded-lg' value={context.userEmail} onChange={(event) => handleInputEmail(event.target.value)} />

            <label alt='password' className='font-semibold text-lg'>Password</label>
            <input type='password' alt='password' className='my-3 p-2 h-10 border border-black border-solid rounded-lg' />
          </div>
          <NavLink to={'/'}>
            <button
              type='submit'
              className='my-3 text-xl  font-bold border border-none bg-gray-400 rounded-xl p-3 w-48 cursor-pointer hover:bg-gray-700 hover:text-white'
              onClick={() => signUp()}
            >
              Sign Up
            </button>
          </NavLink>
        </form>
      </div>
      {context.openModal && (
        <Modal />)}
    </Layout>

  )
}

export default SignIn