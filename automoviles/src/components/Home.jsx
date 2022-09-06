
import React from 'react'
import Cards from './Cards'
import Autos from './Autos'
import FilterOrder from './FilterOrder'
// import Nav from './Nav'

function Home() {
  return (
    <div>

      <h1>Descubri todos los modelos</h1>

      <FilterOrder/>

      <Cards/>
      <Autos/>
    </div>
  )
}

export default Home