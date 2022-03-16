import React, { useState, useEffect } from "react";
export default function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://subscription-service-api.azurewebsites.net/subscribers")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
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
  return (
    <div style={{ textAlign: "center" }}>
      <img src={data.avatar_url} alt="Avatar" height="100" />
      <p>Name: {data.name}</p>
      <p>Bio: {data.bio}</p>
      <p>Username: {data.login}</p>
      <p>Location: {data.location}</p>
      <p>Public Repos: {data.public_repos}</p>
    </div>
  );
}