"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import {
  protectedPagesUrl,
  authPagesUrl,
  LOGIN_PAGE,
  HOME_PAGE,
} from "@/config";
const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthentication, setAuthentication] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkLocalStore = false;
    if (checkLocalStore) {
      setTimeout(() => {
        setAuthentication(true);
        setLoading(false);
      }, 3000);
    } else {
      setAuthentication(false);
      setLoading(false);
    }
    console.log(pathname, "33473");
  }, [pathname]);
  useEffect(() => {
    if (loading === false) {
      if (isAuthentication && protectedPagesUrl.includes(pathname)) {
        //router.push()
      } else if (!isAuthentication && protectedPagesUrl.includes(pathname)) {
        router.push(LOGIN_PAGE);
      }
    }
  }, [loading, pathname]);
  return (
    <AuthContext.Provider
      value={{ isAuthentication, setAuthentication, loading }}
    >
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
