import { createContext } from "react"

export type UserType = {name: string, role: string}

export type UserContextType = {user : UserType, login : (user: UserType) => void, logout : () => void}

export const UserContext = createContext<UserContextType>({
        user: {name:"", role:""}, 
        login: () => {}, 
        logout: ()=>{}
    }
);

