import React from 'react'
import DemandeList from '../components/demandeList'
import { ListOfDemand } from '../assets/FakeInfo/ListOfDemand'

const Home = () => {
  return (
    <div className='container'>
      <div id="carousel" className='bg-carousel-pattern bg-cover md:p-32 p-5 space-y-5 tracking-wider flex flex-col'>
        <h1 className='font-semibold text-4xl text-white md:w-96 w-full'>Le Partenaire Des Travailleurs</h1>
        <h4 className='text-2xl text-white md:w-1/3 w-full'>VOUS ETES EMPLOYES DE L'UNIVERSITE D'ABOMEY CALAVI</h4>
        <p className='text-xl text-white md:w-1/2 w-full'>Facilitez-vous la vie en effectuant nos demandes depuis cette plateforme</p>
      </div>
      <div className='text-center space-y-5 mt-5 p-10 tracking-wider'>
        <h2>Quelques Demandes Populaires</h2>
        <DemandeList list={ListOfDemand} n={6} />
      </div>
    </div>
  )
}

export default Home