import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;

// Register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

// Get user data
const getUser = async (token) => {
  const config = {
    headers: {
      'x-auth-token': token
    }
  };
  const response = await axios.get(`${API_URL}/user`, config);
  return response.data;
};

const authAPI = {
  register,
  login,
  getUser
};

export default authAPI;