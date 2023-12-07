import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import NotLog from '../../Components/NotLog'
import Layout from '../../Components/Layout'
import Modal from '../../Modal'

function MyAccount() {
  const context = useContext(ShoppingCartContext)

  if (!context.userIsLog) {
    return (
      <Layout>
        <NotLog />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <h2 className='font-medium text-xl'>MyAccount</h2>
        <ul className='flex flex-col items-center justify-center my-10 '>
          <li className='flex gap-3'>
            <p className='font-semibold'>Email: </p>
            <p className='font-light'>{localStorage.getItem('emailUser')}</p>
          </li>
          <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="userPicture" className='w-5/12 my-7' />
        </ul>
        {context.openModal && (
          <Modal />)}
      </Layout>

    )
  }
}
export default MyAccount