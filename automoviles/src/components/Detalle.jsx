import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom';
import './Detalle.css'

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
                <div className='about'>
                    <div className="a-left">
                        <img src={detalle.photo} alt="" />
                    </div>
                    <div className="a-right">
                        <h5>{detalle.name}</h5>
                        <h1>{detalle.title}</h1> 
                    </div>
                </div>
                <div className='cardContainer'>
                <div className="card">
                    <img src={detalle.model_features[0].image} className="card-img-top" />
                    <div className="card-body">
                        <h3>{detalle.model_features[0].name}</h3>
                        <p>{detalle.model_features[0].description}</p>
                    </div>
                </div>
                <div className="card">
                    <img src={detalle.model_features[1].image} className="card-img-top" />
                    <div className="card-body">
                        <h3>{detalle.model_features[1].name}</h3>
                        <p>{detalle.model_features[1].description}</p>
                    </div>
                </div>
                </div>
                    <div className='about'>
                        <div className="a-left">
                          <img src={detalle.model_highlights[0].image} className="img" />
                        </div>
                        <div className="a-right">
                          <h5 className="card-title">{detalle.model_highlights[0].title}</h5>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div> 
                    <div className='about'>   
                        <div className="a-right">
                        <h5 className="card-title">{detalle.model_highlights[1].title}</h5>
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="a-right">
                          <img src={detalle.model_highlights[1].image} className="img" />
                        </div>                               
                    </div>
            </div>
        }
    </div>
  )
}

export default Detalle