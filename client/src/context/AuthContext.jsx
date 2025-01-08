import { createContext , useCallback, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {

const [user, setUser] = useState(null);
const [registerInfo, setRegisterInfo] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
});

const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo (info); },[]);

console.log("registerInfo",registerInfo);

  return (
    <AuthContext.Provider 
    value={{
        user,
        registerInfo,
        updateRegisterInfo,
    }}
    >
      {children}
    </AuthContext.Provider>
    );
};