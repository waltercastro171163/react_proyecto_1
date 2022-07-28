import React from 'react'
import { ItemListContainer } from './components/ItemListContainer'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <>
        <Navbar brand={ 'WalterShop' } />
        <ItemListContainer  greeting={'Hola Bienvenido, ¡Gracias por confiar en nosotros!'}/>
    </>
  )
}
