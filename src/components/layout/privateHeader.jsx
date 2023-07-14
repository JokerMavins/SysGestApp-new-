import { FaBell, FaMailBulk } from "react-icons/fa";
import Avatar from "../avatar";

const PrivateHeader = () => {
  return (
    <div className="shadow-md items-center flex flex-row justify-between h-14 w-full px-3">
      <div>
        <input className="border p-1 rounded border-gray-200 shadow-sm" placeholder="Entrer le texte" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <FaBell className="text-green-800" />
        <FaMailBulk className="text-green-800" />
        <h1>|</h1>
        <h1>John Doe</h1>
        <Avatar />
      </div>
    </div>
  );
};

export default PrivateHeader;
