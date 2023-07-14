import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const BASE_URL = `http://127.0.0.1:5000/api`;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
 (config) => {
    // Get user from localStorage
    const storedTokens = JSON.parse(localStorage.getItem("tokens"));

    const token = storedTokens && storedTokens.token;
    const refreshToken = storedTokens && storedTokens.refreshToken;

    // Vérification de la validité du token
    if (token && token !== "") {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.clear();
        logout();
      }

      // Ajouter le token au header d'authorization de la requête
      // config.headers.Authorization = `Bearer ${token}`;
    } else {
      localStorage.clear();
      logout();
    }

    return config;
  },
  (error) => {
    if (error.code === "ECONNABORTED" && error.message.includes("timeout")) {
      window.location.href = "/500";
    } else if (error.response) {
      // Réponse reçue avec un code d'erreur (hors délai d'attente)
      if (error.response.status === 401) {
        localStorage.clear();
        logout();
      } else if (error.response.status === 404) {
        //window.location.href = "/err_no";
      } else if (error.response.status >= 500) {
        //window.location.href = "/500";
      }
    } else if (error.request) {
      //window.location.href = "/500";
    } else {
      //window.location.href = "/500";
      toast.error("Verifier votre connexion");
    }
    return Promise.reject(error);
  }
);

export default api;
