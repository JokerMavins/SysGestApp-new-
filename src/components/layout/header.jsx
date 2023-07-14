import React, {useState} from "react";
import { FaClock, FaMailchimp, FaPhone, FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div className="container transition-all ease-linear delay-500">
      <div className="flex flex-row justify-around items-center py-5 transition-all ease-in-out delay-500">
        <div>
          <h2 className="font-semibold text-3xl">SystGesAct</h2>
          <h5>Gestion des demandes</h5>
        </div>
        <div className="md:flex hidden flex-row justify-around space-x-20">
          <div className="flex flex-row items-center space-x-3">
            <div className="w-10 h-10 items-center justify-center flex rounded-full bg-white shadow-md">
              <FaPhone className="text-green-600"/>
            </div>
            <div>
              <h4 className="font-semibold">Appelez-nous</h4>
              <h5>+229 67236671</h5>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="w-10 h-10 items-center justify-center flex rounded-full bg-white shadow-md">
              <FaMailchimp className="text-green-600"/>
            </div>
            <div>
              <h4 className="font-semibold">Envoyer-nous un mail</h4>
              <h5>support@domain.com</h5>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="w-10 h-10 items-center justify-center flex rounded-full bg-white shadow-md">
              <FaClock className="text-green-600"/>
            </div>
            <div>
              <h4 className="font-semibold">Lun.-Sam.:</h4>
              <h5>08.00am - 18.00pm</h5>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex flex-row justify-around transition-all ease-linear delay-200 bg-slate-400 items-center">
        <ul className="md:flex hidden flex-row justify-center items-center p-5 space-x-10 transition-all ease-linear delay-200">
          <li className="text-white hover:text-green-600 transition-all ease-linear delay-200"><Link to="/">ACCEUIL</Link> </li>
          <li className="text-white hover:text-green-600 transition-all ease-linear delay-200"><Link to="services">SERVICES</Link></li>
          <li className="text-white hover:text-green-600 transition-all ease-linear delay-200"><Link to="connexion">SE CONNECTER</Link></li>
          <li className="text-white hover:text-green-600 transition-all ease-linear delay-200"><button onClick={()=> setVisible(!visible)}>SUIVRE UNE DEMANDE</button></li>
        </ul>
        {visible ? <div className="transition-all ease-linear delay-500 flex items-center justify-around"><input className="p-2 h-7 rounded-sm transition-all ease-linear delay-500" placeholder="rechercher un service" style={{outline: "none"}}/><button className="bg-green-700 p-2 h-7 text-white transition-all ease-linear delay-500"><FaSearch /></button></div> : ""}
      </nav>
    </div>
  );
};

export default Header;
