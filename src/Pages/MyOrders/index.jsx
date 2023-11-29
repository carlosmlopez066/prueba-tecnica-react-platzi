import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import NotLog from '../../Components/NotLog'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import Modal from '../../Modal'

function MyOrders() {
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
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts} />
            </Link>
          ))
        }
        {context.openModal && (
          <Modal />)}
      </Layout>
    )
  }
}

export default MyOrders