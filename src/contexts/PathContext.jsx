import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PathContext = createContext();

export const PathProvider = ({ children }) => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
    console.log("path here:",location.pathname);
  }, [location]);

  return (
    <PathContext.Provider value={path}>
      {children}
    </PathContext.Provider>
  );
};

export const usePath = () => useContext(PathContext);