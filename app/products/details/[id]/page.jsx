import React from 'react'
import Details from '@/app/components/Details'
import Link from 'next/link'
import {BiArrowBack} from 'react-icons/bi'

const ProductDetails = ({params: {id}}) => {
  return (
    <div className='card'>
        <Link className='btn btn-back' href='/products'>
        <BiArrowBack />
        </Link>
        <Details id={id}/>
    </div>
  )
}

export default ProductDetails