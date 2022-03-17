import axios from "axios";
import { request } from "http";
    

import React, { useState, useEffect } from "react";
export default function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
    .get("http://subscription-service-api.azurewebsites.net/subscribers")  
      .then((data) => {
        setData(data);
      })
    .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
  if (error) return "Error!";

  var arrayLength = JSON.stringify(data.data);
  var time = arrayLength.length
  for(var i = 0; i < time; i++){
  
    return (
      <div>{JSON.stringify(data.data)}</div>
      
      
    );
  }

}