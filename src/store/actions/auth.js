import api from "../../services/api";

const API_URL = "/";

//Inscription utilisateur
const register = async (userData) => {
  const response = await api.post(API_URL + "register", userData);

  if (response.data) {
    const tokens = {
      token: response?.data?.user?.access,
      refreshToken: response?.data?.user?.refresh,
      user: response?.data?.user?.username,
    };
    localStorage.setItem("tokens", JSON.stringify(tokens));
  }

  return response.data;
};

//connexion utilisateur
const login = async (userData) => {
  const response = await api.post( API_URL + "login", userData);

  if (response.data) {
    const tokens = {
      token: response?.data?.user?.access,
      refreshToken: response?.data?.user?.refresh,
      user: response?.data?.user?.username,
    };
    localStorage.setItem("tokens", JSON.stringify(tokens));
  }

  return response.data;
};

//Deconnexion utilisateur
const logoutSession = async () => {
  logout()
};

//exportation des services
const authService = {
  register,
  login,
  logoutSession,
};

export default authService;
