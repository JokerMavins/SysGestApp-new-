import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const navigate = useNavigate();
  let accessToken = "delkdl";
  let user = "dlekdlkelek";

  useEffect(() => {
    if (accessToken === "" && user === "") {
      navigate("/connexion");
    }
  }, []);

  return children;
};

export default Protected;
