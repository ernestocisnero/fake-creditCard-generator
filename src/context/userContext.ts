import { createContext } from "react";
import { IUser } from "../interfaces";

export const UserContext = createContext<IUser | null>(null);