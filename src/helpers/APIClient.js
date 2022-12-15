import axios from "axios";

const login = async (username, password) => {
  try {
    const response = await axios.post("https://your-api-endpoint.com/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
