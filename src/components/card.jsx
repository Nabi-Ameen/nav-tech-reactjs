import React from 'react'
import Button from './Button'

const Card = ({ item }) => {

  return (
    <div className='p-4 w-60 bg-gray-300'>
      <div><img src={item.image} alt={item.title} /></div>
      <h5 className='font-bold text-lg py-4'>{item.title}</h5>
      <p className='font-normal text-lg py-4'>{item.desc}</p>
      <Button title={item.btnText} />
    </div>
  )
}

export default Card