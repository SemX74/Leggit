import { FC, createContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/ReduxHook";
import {
  IAddUser,
  ILogin,
  IUserValue,
  addUser,
  clearError,
  addError,
} from "../Slices/UserSlice";

interface AuthProviderProps {
  children?: JSX.Element;
}
export interface AuthContextProps {
  user: IUserValue | null;
  signIn: (data: ILogin) => void;
  signUp: (data: IAddUser) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUserValue | null>(null);

  const users = useAppSelector((state) => state.users.value);
  const dispatch = useAppDispatch();

  const signIn = (data: ILogin) => {
    const userExist = users.find(
      (user) =>
        user.username === data.username && user.password === data.password
    );
    if (userExist) {
      dispatch(clearError());
      setUser(userExist);
    } else {
      dispatch(addError("this user does not exist! "));
    }
  };

  const signUp = (data: IAddUser) => {
    dispatch(addUser(data));
  };
  const signOut = () => setUser(null);

  const value = { user, signIn, signOut, signUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
