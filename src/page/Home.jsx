import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasicTable from "../component/TableComp";

const Home = () => {
  const { value } = useSelector((state) => state?.pageValue);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  if (error) {
    return <p>{error ?? "Something Went Wrong"}</p>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = null;
        response = await fetch(`https://reqres.in/api/users?page=${value}`);
        const jsonData = await response.json();
        setData(jsonData);
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
  }, [value]);
  return (
    <BasicTable
      data={data?.data}
      total_pages={data?.total_pages}
      isLoading={isLoading}
    />
  );
};

export default Home;
