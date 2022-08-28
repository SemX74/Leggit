import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

export function useAuth() {
  return useContext(AuthContext);
}
