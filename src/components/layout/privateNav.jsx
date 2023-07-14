import {
  FaArrowRight,
  FaInfo,
  FaPaperPlane,
  FaPaperclip,
  FaUser,
  FaHome,
  FaCog,
  FaLock,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const PrivateNav = () => {
  const navigate = useNavigate()

  const handleDisconnect =()=> {
    navigate("/connexion")
  }

  return (
    <div className="bg-green-600 justify-between flex flex-col h-screen px-6">
      <div className="flex flex-col">

        <div className="p-2 items-center justify-center flex space-x-4">
          <img className="w-10 h-10 bg-white rounded-full" />
          <h1 className="text-white">SYSGESTACT</h1>
        </div>

        <hr className="border-[1] border-gray-100" />
        <button className="p-4 text-left space-x-2 flex flex-row items-center ">
          <FaHome className="text-white text-xl" />
          <h2 className="text-white">Acceuil</h2>
        </button>
        <hr className="border-[1] border-gray-100" />

        <div className="px-5 py-2 text-white">
          <h1>Menus</h1>
        </div>
        <Link to="employedList" className="p-3 flex items-center text-white justify-between hover:bg-white hover:text-green-500 hover:rounded-lg">
          <div className="flex-row flex items-center space-x-2">
            <FaUser />
            <h2>Employées</h2>
          </div>
          <FaArrowRight />
        </Link>

        <Link to="demandeList" className="p-3 flex items-center text-white justify-between hover:bg-white hover:text-green-500 hover:rounded-lg">
          <div className="flex-row flex items-center space-x-2">
            <FaPaperclip />
            <h2>Demandes</h2>
          </div>
          <FaArrowRight />
        </Link>

        <button className="p-3 flex items-center text-white justify-between hover:bg-white hover:text-green-500 hover:rounded-lg">
          <div className="flex-row flex items-center space-x-2">
            <FaPaperPlane />
            <h2>Pièces</h2>
          </div>
          <FaArrowRight />
        </button>
      </div>
      <div className="flex flex-col">
        <button className="p-3 flex items-center text-white justify-between hover:bg-white hover:text-green-500 hover:rounded-lg">
          <button onClick={handleDisconnect} className="flex-row flex items-center space-x-2">
            <FaLock />
            <h2>Deconnexion</h2>
          </button>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PrivateNav;
