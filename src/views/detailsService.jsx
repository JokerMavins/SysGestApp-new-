import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfDemand } from '../assets/FakeInfo/ListOfDemand';

const DetailsService = () => {
    const {id} = useParams();
  return (
    <div className='p-20 space-y-5'>
        {
           ListOfDemand && ListOfDemand.map((demand)=>{
            if(demand.id == id){
                return(
                    <>
                        <h1 className='text-2xl'>{demand.titre.toUpperCase()}</h1>
                        <p>{demand.description}</p>
                        <p className='space-y-5'>
                            <span>Il vous faut un(e):</span>
                            <ul className='space-y-5'>
                                <li>- Demande adressée au recteur</li>
                                <li>- Copie du certificat de premiere prise de service</li>
                                <li>- Copie du contrat de travail </li>
                                <li>- Copie de la fiche de paie</li>
                                <li>- Copie légalisée de l'acte de naissance</li>
                            </ul>
                        </p>
                    </>
                    )
                }
            })
        }
        <button className='bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 p-3'>TELECHARGE LES FICHIERS</button>
    </div>
  )
}

export default DetailsService