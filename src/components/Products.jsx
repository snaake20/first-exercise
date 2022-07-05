import React, { useEffect, useState } from 'react'
import { Product } from './Product'
// import fakeData from './data/fakeData.json'
import { Order } from './Order'
import { Button } from './Button'

var requestOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://2f20-95-77-98-248.eu.ngrok.io/api/products',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  },
}

const Products = () => {
  const [products, setProducts] = useState([])
  const [orderList, setOrderList] = useState([])
  const [order, setOrder] = useState([])
  // fakedata.data
  useEffect(() => {
    setProducts(() => {
      fetch('https://d63e-95-77-98-248.eu.ngrok.io/api/products', requestOptions)
        .then((res) => res.json())
    })
  }, [])

  const handleClick = (product, isChecked) => {
    if (isChecked === true) {
      setOrderList((prev) => [...prev, product])
      setOrder((prev) => [...prev, product.id])
    } else {
      setOrderList((prev) => prev.filter((p) => p.id !== product.id))
      setOrder((prev) => prev.filter((p) => p !== product.id))
    }
    // console.log(orderList)
  }

  // console.log(products)
  return (
    <div className='flex gap-2 border-4 border-gray rounded my-5 mx-5'>
      <div className='flex flex-col justify-center w-2/3 border-r-0 '>
        {products.map((product) => {
          // console.log(product)
          const { name, price, bio } = product.attributes
          return (
            <Product
              key={product.id}
              id={product.id}
              name={name}
              price={price}
              bio={bio}
              onClick={handleClick}
            />
          )
        })}
      </div>
      <div className='w-1/3 my-5 flex flex-col border-l-2 '>
        {!orderList.length ? (
          <p className='flex justify-center items-center h-3/4 m-0 p-0'>
            {' '}
            No products in basket...{' '}
          </p>
        ) : (
          orderList.map((order) => {
            // console.log(order)
            const { id, name, price } = order
            return <Order key={id} name={name} price={price} onClick={handleClick} />
          })
        )}
        {orderList.length ? <Button order={order} /> : null}
      </div>
    </div>
  )
}
export default Products
