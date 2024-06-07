import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const { userId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = null;
        response = await fetch(`https://reqres.in/api/users?id=${userId}`);
        const jsonData = await response.json();
        setData(jsonData?.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      // Cleanup function
    };
  }, [userId]);

  if(isLoading){
    return <h1>Loading....</h1>
  }
  return <div className="justify-center">
    <img src={data?.avatar} style={{margin:"auto"}}/>
    <h1 className="mt-6">Name:{`${data?.first_name} ${data?.last_name}`}</h1>
    <p>Email:{data?.email}</p>
  </div>;
};

export default UserDetailsPage;
