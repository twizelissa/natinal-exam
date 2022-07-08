import { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AppContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  authUser: null,
  setAuthUser: () => {},
  hasVoted: false,
  setHasVoted: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        authUser,
        setAuthUser,
        hasVoted,
        setHasVoted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AuthProvider, AppContext };
