import { createContext } from "react"

export type UserType = {id: number, name: string}

export type UserContextType = {user : UserType, login : (user: UserType) => void, logout : () => void}

export const UserContext = createContext<UserContextType>({
        user: {id:0, name:""}, 
        login: () => {}, 
        logout: ()=>{}
    }
);

