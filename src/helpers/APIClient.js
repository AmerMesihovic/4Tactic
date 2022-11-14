import axios from "axios";

class CarNewsService {
  async getCarNews() {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
        // "https://newsapi.org/v2/everything?q=tesla&from=2022-10-11&sortBy=publishedAt&apiKey=a4581025f14b48339ea103dded8f7cde"
      );
      return result.data;
    } catch (err) {
      return -1;
    }
  }

  getCarNewVersionTwo() {
    return axios.get(
      "https://jsonplaceholder.typicode.com/posts"
      // "https://newsapi.org/v2/everything?q=tesla&from=2022-10-11&sortBy=publishedAt&apiKey=a4581025f14b48339ea103dded8f7cde"
    );
  }

  login({ username, password }) {
    Promise.resolve({ name: "Amer Mesihovic", status: "OK", role: "admin" });
  }
}

export const carNewsService = new CarNewsService();
