import React, { createContext, useState } from 'react';
export const PasswordContext = createContext();

const PasswordContextProvider = ({ children }) => {
  const [password, setPassword] = useState('')
  return (
    <PasswordContext.Provider value={{ password, setPassword }} >
      {children}
    </PasswordContext.Provider>
  )
}
export default PasswordContextProvider;