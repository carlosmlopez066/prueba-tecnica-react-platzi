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
            <p className='font-semibold'>Name: </p>
            <p className='font-light'>carlos</p>
          </li>
          <li className='flex gap-3'>
            <p className='font-semibold'>Email: </p>
            <p className='font-light'>carlos@gmail</p>
          </li>
          <img src="" alt="" />
        </ul>
        {context.openModal && (
          <Modal />)}
      </Layout>

    )
  }
}
export default MyAccount