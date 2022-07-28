import React from 'react'

export const ItemListContainer = ( props) => {
  return (
    <>
        <h1 className="text-center shadow mt-5"> 
            {props?.greeting}
        </h1>
    </>
  )
}
