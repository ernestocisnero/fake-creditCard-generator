import { FC, useState } from 'react';
import { formInputProps, IProp, IUser } from "../interfaces";
import { UserContext } from './userContext';




export const DataContextProvider:FC<IProp> = ({ children }) => {

  const [ userData, setUserData ] = useState({name:"", lastName:""});


  return (
    <UserContext.Provider value={ { userData, setUserData }  }>
      { children }
    </UserContext.Provider>
  )
}
