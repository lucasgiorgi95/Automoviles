  import React, { useEffect, useState } from 'react';
  import {  useDispatch, useSelector } from 'react-redux';
  import { loadAutos } from '../Redux/action';
  import Autos from './Autos'
  import Ordenar from '../helper/Order'
  import './Autos.css'

function Cards() {
  const {autos, order, filter} = useSelector((state)=>state)
  const [autosFilter , setAutosFilter]=useState(autos)
  const dispatch =useDispatch()
  const url = "https://challenge.agenciaego.tech/api/models"

useEffect(()=>{
  
 setAutosFilter(autos)
},[autos])

  useEffect(() => {
    
       fetch(url)
      .then(response=>response.json())
      
      .then(json=>dispatch(loadAutos(json)))
      .catch(error => console.log(error))
   
    
  }, []);

  useEffect(() => {
    console.log(autosFilter)
    setAutosFilter(filter === 'todos'?autos:autos.filter((e)=>e.segment===filter))
  }, [filter])
  
  

  return (
    <div className='containerCard'>
     {
      order=='nada'?
      autosFilter?.map((e)=>(
        <Autos key={e.id} id={e.id} name={e.name} year={e.year} photo={e.photo} price={e.price}/>
      )
      ):[...autosFilter].sort(Ordenar(order)).map((e)=>(
        <Autos key={e.id} id={e.id} name={e.name} year={e.year} photo={e.photo} price={e.price}/>
      )
      )}
    </div>
  )
}

export default Cards