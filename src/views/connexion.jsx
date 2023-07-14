import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { login } from "../store/reducers/auth";
import { toast } from "react-toastify";
import {useSelector, useDispatch} from "react-redux"

const Connexion = () => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      toast(message);
    }

    if (isError) {
      toast(message);
    }
  }, [isSuccess, isError]);

  const handleSubmit = () => {
    if (user.email !== "" && user.password !== "") {
      dispatch(login(user));
    } else {
      alert("Les champs sont vides");
    }
  };

  if (isLoading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="flex items-center space-x-4 justify-center min-h-screen">
      <div className="flex flex-col space-y-5 p-16 shadow-md">
        <h2 className="font-bold text-2xl">Connexion</h2>
        <label className="text-gray-500">Id Personnel</label>
        <input
          placeholder="Id"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          className="border-2 p-2 rounded-sm top-0 w-full left-0 right-0"
        />
        <label className="text-gray-500">Mot de passe</label>
        <div className="border-2 rounded-sm w-96 p-2 top-0 left-0 right-0 flex flex-row items-center justify-between">
          <input
            type={visible ? "text" : "password"}
            placeholder="entrez votre mot de passe"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            className="flex flex-1"
            style={{ outline: "none" }}
          />
          <button onClick={() => setVisible(!visible)}>
            {visible ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <button onClick={handleSubmit} className="p-3 bg-yellow-400 text-white">
          Login
        </button>
        <a href="#" className="underline">
          Mots de passe oublier ?
        </a>
      </div>
      <div className="bg-carousel-pattern flex w-1/3 h-96"></div>
    </div>
  );
};

export default Connexion;
