import { ArrowDownIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'


const NotLog = () => {
  return (
    <NavLink to='/sign-in'
    >
      <div className='flex flex-col gap-6 justify-center items-center'>
        <h2 className='font-semibold text-lg'>LOG IN OR SIGN IN TO ACCESS THE INFORMATION ON THE PAGE</h2>
        <p className='flex font-semibold text-md'>Click here for sign In <ArrowDownIcon className='h-6 w-6 text-black' /></p>
        <div className='flex gap-5'>
          <button className='my-3 text-xl  font-bold border border-none bg-gray-400 rounded-xl p-3 w-48 cursor-pointer hover:bg-gray-700 hover:text-white'>Log In</button>
          <button className='my-3 text-xl  font-bold border border-none bg-gray-400 rounded-xl p-3 w-48 cursor-pointer hover:bg-gray-700 hover:text-white'>Sign In</button>
        </div>

      </div  >
    </NavLink>
  )
}
export default NotLog