import React from 'react'
import { Link } from 'react-router-dom';

const Card=(props) => {
    const {titulo,descripcion,img,btnText,id} =props;
    return (

    <div className="card " style={{width: "18rem"}}>
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body ">
      <h2 className="card-title">{titulo}</h2>
      <p className="card-text">{descripcion}</p>
      <a href="#" className="btn btn-primary">{btnText}</a>
      <h4>{id}</h4>
    </div>
  </div>
  )
}

export default Card