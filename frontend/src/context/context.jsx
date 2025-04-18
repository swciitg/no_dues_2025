import { createContext, useState } from "react";

export const Context = createContext()
export const ContextProvider = ({children})=>{
     
    const [name, setName] = useState('Demo Name');
    const [role, setRole] = useState('central-admin'); // could be student, or admin for other roles. this will be used in api calls
    
    return (
        <Context.Provider value={{name, setName, role, setRole}}>
            {children}
        </Context.Provider>
    )
}