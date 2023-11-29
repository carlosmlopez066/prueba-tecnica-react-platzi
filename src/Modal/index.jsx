import React from "react"
import { useContext } from 'react'
import { createPortal } from "react-dom"
import { ShoppingCartContext } from '../Context'

const Modal = () => {
  const context = useContext(ShoppingCartContext)
  const confirmLogOut = (confirmation) => {
    if (confirmation === 'yes') {
      return (
        context.setOpenModal(false),
        localStorage.removeItem('isLog')
      )
    } else if (confirmation === 'no') {
      return context.setOpenModal(false)
    }
  }

  return createPortal(
    <div className="w-screen h-screen bg-white bg-opacity-50  z-10 top-0 absolute flex flex-col justify-center items-center">
      <div className="bg-gray-300 rounded-lg p-10 flex flex-col justify-center items-center shadow-2xl">
        <p className="text-slate-900 text-xl font-bold opacity-100">You want Log Out ?</p>
        <div className="flex gap-6 mt-5 ">
          <button
            className="bg-white p-2 w-20 rounded-lg font-semibold hover:shadow-xl"
            onClick={() => confirmLogOut('yes')}
          >Yes</button>
          <button
            className="bg-white p-2 w-20 rounded-lg font-semibold hover:shadow-xl"
            onClick={() => confirmLogOut('no')}
          >No</button>
        </div>

      </div>
    </div>
    ,
    document.getElementById('modal')
  )
}
export default Modal