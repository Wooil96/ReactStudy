import React from 'react'
import ImpRegBasic from '../components/Order/ImpRegBasic'
import ImpRegCont from '../components/Order/ImpRegCont'

function OrderPage() {
  return (
    <div>
      <form>
        <ImpRegBasic />
        <ImpRegCont />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default OrderPage
