import React from 'react'
import {useNavigate} from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';

function Autos({name, year, price, photo, id}) {

  const  navigate = useNavigate()
  function detalle(){
    navigate('/Detail/'+id)
  }

  return (
    <div className='containerCard'>
      <Card className='card' onClick={detalle} sx={{ maxWidth: 545 }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year} | {price}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="140"
        image={photo}
        alt="automovil"
      />
    </Card>
    </div>
  )
}

export default Autos