import React from 'react'
import Demande from './Demande'

const DemandeList = (props) => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-10'>
        {
            props.list && props.list.slice(0,props.n).map((demande)=>{
                return(
                    <Demande demande={demande} />
                )
            })
        }
    </div>
  )
}

export default DemandeList