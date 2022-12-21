import React from 'react'
import Item from '../Item/Item'
const ItemListContainer = () => {

  const items= [

  ]
  return (
   <>
    {items.map(({id,name}) => (
    <Item key={id} id={id} name={name}/>
    ))}

    <h1>hola soy el inicio</h1>
   </>
  )
}

export default ItemListContainer