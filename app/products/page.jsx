import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ImPriceTag } from 'react-icons/im'

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  return await response.json();
}
const Products = async () => {
  const products = await fetchProducts();
  return (
    <div className='products-container'>
      <h2>Products</h2>
      <br></br> <br></br>
      <ul className="product-list">
        { products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/details/${product.id}`}>
              <Image className='product-image' src={`${product.image}`} alt="product-image" width={100} height={143} />
              <hr></hr>
              <h3>{product.title}</h3>
              <br></br>
              <ImPriceTag className='price-tag'/>
              <p>{product.price} ₺</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products