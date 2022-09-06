import React from 'react'
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';
import {order, filterAuto}from'../Redux/action/index'
import './FilterOrder.css'



function FilterOrder() {
  const dispatch = useDispatch()
  
  function handlePrice(e){
    console.log(e.target.value)
    e.preventDefault()
    dispatch(order(e.target.value))
  }
function filter (e){
  console.log(e.target.value)
    e.preventDefault()
    dispatch(filterAuto(e.target.value))
}

  return (
    <div className='filterContainer'>
        <div className='filter'>
        Filtrar por: 
          <Button onClick={filter} size="small" color="inherit" value="todos">Todos</Button>
          <Button onClick={filter} size="small" color="inherit" value="Sedan">Autos</Button>
          <Button onClick={filter} size="small" color="inherit" value="Pickups y Comerciales">Pikups y Comerciales</Button>
          <Button onClick={filter} size="small" color="inherit" value="SUVs"> SUVs y Crossovers</Button>
          </div>    
          <div>
            Ordenar por
              <select onChange={(e)=>handlePrice(e)} className='select'>
                <option value="nada"> <span>Nada</span></option>
                <option value="menMay">De <span>menor</span>  a <span>mayor</span></option>
                <option value="mayMen">De <span>mayor</span>  a <span>menor</span></option>
                <option value="nuevo">Mas <span>nuevos</span> primero</option>
                <option value="viejo">Mas <span>viejos</span> primero</option>
              </select>
        </div>
    </div>
  )
}

export default FilterOrder