import React from 'react'
import {Link} from 'react-router-dom';

const Demande = (props) => {
    const {titre, description, id} = props.demande;
  return (
    <div className='text-center md:p-16 p-5 border-[1px] border-green-500 hover:shadow-md transition-all ease-linear delay-500'>
        <h1 className='font-bold text-md'>{titre}</h1>
        <p className='text-sm p-5'>{description}</p>
        <Link to={"/services/details/"+`${id}`} className='bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 p-3 my-10'>DETAIL</Link>
    </div>
  )
}

export default Demande