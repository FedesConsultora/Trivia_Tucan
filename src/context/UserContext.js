// src/context/UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ nombreCompleto: "", email: "", telefono: "" });
  const [esGanador, setEsGanador] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, esGanador, setEsGanador }}>
      {children}
    </UserContext.Provider>
  );
};
