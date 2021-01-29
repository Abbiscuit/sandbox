import { createContext, useContext } from 'react';
import useProvideAuth from './useProvideAuth';

const authContext = createContext();

export default function AuthProvider({ children }) {
  const auth = useProvideAuth();

  /* prevent authenticated page from displaying */
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

/* Shorthand context */
export const useAuth = () => {
  return useContext(authContext);
};
