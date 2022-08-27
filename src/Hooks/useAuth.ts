import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";

export function useAuth() {
  return useContext(AuthContext);
}
