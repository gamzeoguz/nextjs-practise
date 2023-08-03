import React from 'react'
import Image from 'next/image';
import { IoStar } from 'react-icons/io5'

async function fetchDetails (id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
}

const Details = async ({id}) => {
  const details = await fetchDetails(id);

  return (
    <>
        <Image className="details-image" src={`${details.image}`} alt="product-image" width={100} height={143} />
        <br></br>
        <h2>{details.title}</h2>
        <p>{details.description}</p>
        <p className='category'>Category: {details.category}</p>
        <p className='rate'>Rate: {details.rating.rate}</p> <IoStar className='star' />
    
    </>
  )
}

export default Details