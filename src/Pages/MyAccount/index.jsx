import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import NotLog from '../../Components/NotLog'

import Layout from '../../Components/Layout'

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
        MyAccount
      </Layout>
    )
  }
}
export default MyAccount