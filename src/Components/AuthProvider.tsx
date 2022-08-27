import { FC, createContext, useState } from "react";

interface AuthProviderProps {
  children?: JSX.Element;
}
export interface AuthContextProps {
  user: boolean;
  signIn: () => void;
  signOut: () => void;
}


export const AuthContext = createContext<AuthContextProps | null>(null);
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(false);
  const signIn = () => setUser(true);
  const signOut = () => setUser(false);
  const value = { user, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
