import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';


function Detalle() {
    const{id} = useParams();
    const url = "https://challenge.agenciaego.tech/api/models"
    const [detalle, setDetalle]=useState(null)


    useEffect(() => {
    
        fetch(url + "/"+id)
       .then(response=>response.json())
       .then(json=>setDetalle(json))
       .catch(error => console.log(error))
     
   }, [id]);

  return (
    <div>
        {
            detalle&&
            <div>
                <h1>{detalle.name}</h1>
            </div>
                
            
        }
    </div>
  )
}

export default Detalle