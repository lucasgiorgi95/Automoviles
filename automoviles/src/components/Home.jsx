
import React from 'react'
import Cards from './Cards'
import Autos from './Autos'
import FilterOrder from './FilterOrder'
import Titulo from './Titulo'


function Home() {
  return (
    <div>
      <Titulo/>
      <FilterOrder/>
      <Cards/>
      <Autos/>
    </div>
  )
}

export default Home