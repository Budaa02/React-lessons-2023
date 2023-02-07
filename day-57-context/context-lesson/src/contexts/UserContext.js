import { createContext } from "react";

const UserContext = createContext(null);

// Provider
// Suu XXK baij bolno. Irgeded suu hangan niiluuldeg.

const UserProvider = ({ children }) => {
  const userName = "Shar suu";
  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
// Consumer
// Jiriin irged bolon huuhduud(hereglegchid)
