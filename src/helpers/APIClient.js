import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const Login = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://your-api-endpoint.com/api/v1/users"
        );
        setResponse(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {response ? (
        <Text>{JSON.stringify(response)}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Login;
