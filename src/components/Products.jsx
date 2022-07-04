import React, {useEffect, useState} from 'react'
import { Product } from './Product'
import fakeData from './data/fakeData.json'

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(fakeData.data);
    }, [])
    console.log(products)
  return (
    <>
      {products.map(product => {
        // console.log(product)
        const {name, price, bio} = product.attributes;
        <Product id={product.id} name={name} price={price} bio={bio} />
      })}
    </>
  )
}
export default Products;