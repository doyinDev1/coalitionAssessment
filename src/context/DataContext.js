import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let username = 'coalition';
  let password = 'skills-test';
  let auth = btoa(`${username}:${password}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {headers: {
            'Authorization': `Basic ${auth}`
          }
        });
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const findByName = (name) => {
    return data.find(item => item.name === name);
  };
  return (
    <DataContext.Provider value={{ data, loading, error, findByName }}>
      {children}
    </DataContext.Provider>
  );
};
