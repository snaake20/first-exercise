import React, {useEffect, useState} from 'react'
import { Product } from './Product'
import fakeData from './data/fakeData.json'
// import './index.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        setProducts(fakeData.data);
    }, [])

    const handleClick = (product, isChecked) => {
      if (isChecked === true) {
        setOrderList(prev => [product, ...prev])
      }
      else {
        setOrderList(prev => prev.filter(p => p.id !== product.id))
      }
      console.log(orderList)

    }

    // console.log(products)
  return (
    <div className='flex flex-col justify-center w-2/3 mx-5 my-5 border-4 border-gray rounded '>
      {products.map(product => {
        // console.log(product)
        const {name, price, bio} = product.attributes;
        return (<Product key={product.id} name={name} price={price} bio={bio} onClick={handleClick} />
      )
      })}
      {/* {orderList.map(order => {
        // console.log(order)
        const {id, name, price, bio} = order;
        return (<Order key={id} name={name} price={price} bio={bio} onClick={handleClick} />
      )
      })} */}
    </div>
  )
}
export default Products;