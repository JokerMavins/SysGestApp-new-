import React from 'react'
import { ListOfDemand } from '../assets/FakeInfo/ListOfDemand'
import DemandeList from '../components/demandeList'

const Service = () => {
  return (
    <div className='p-10'>
      <DemandeList list={ListOfDemand} />
    </div>
  )
}

export default Service