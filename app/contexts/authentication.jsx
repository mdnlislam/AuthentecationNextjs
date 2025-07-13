"use client";

import { useParams, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isAuthentication, setAuthentication] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkLocalStore = true;
    if (checkLocalStore) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setAuthentication(false);
      setLoading(false);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuthentication, setAuthentication, loading }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
