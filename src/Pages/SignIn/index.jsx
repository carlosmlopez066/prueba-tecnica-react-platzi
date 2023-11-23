import Layout from '../../Components/Layout'
import './styles.css'

function SignIn() {
  return (
    <Layout>
      <div className=' SignIn w-full  flex justify-center items-start'>
        <form className='flex flex-col justify-center items-center w-80'>
          <div className='flex flex-col justify-center items-start '>
            <label alt='name' className='font-semibold text-lg'>Name</label>
            <input type='text' alt='name' className='my-3 p-2 h-10 border border-black border-solid rounded-lg ' />

            <label alt='email' className='font-semibold text-lg'>Email</label>
            <input type='text' alt='email' className='my-3 p-2 h-10 border border-black border-solid rounded-lg' />

            <label alt='password' className='font-semibold text-lg'>Password</label>
            <input type='password' alt='password' className='my-3 p-2 h-10 border border-black border-solid rounded-lg' />
          </div>

          <button type='button' className='my-3 text-xl  font-bold border border-none bg-gray-400 rounded-xl p-3 w-48 cursor-pointer hover:bg-gray-700 hover:text-white'> Sign Up</button>
        </form>
      </div>
    </Layout>
  )
}

export default SignIn