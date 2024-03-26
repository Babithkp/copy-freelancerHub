"use client";
import React, { createContext, useContext, useState } from "react";

export default interface FormContextProps {
  userInfo: {
    name: string;
    email: string;
  };
  storeUserInfo: (name: string, email: string) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);

export const useGlobalContext = () => useContext(FormContext);

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [SignUpInfo, setUserSignUpInfo] = useState<
    FormContextProps["userInfo"]
  >({
    email: "",
    name: "",
  });

  const addUserSignUpInfo = (name: string, email: string): void => {    
    setUserSignUpInfo({
      email,
      name,
    });
  };

  const value: FormContextProps = {
    userInfo: SignUpInfo,
    storeUserInfo: addUserSignUpInfo,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
