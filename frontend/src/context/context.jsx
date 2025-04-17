import { createContext, useState } from "react";

export const Context = createContext()
export const ContextProvider = ({children})=>{
     
    const [name, setName] = useState('Demo Name');
    const [role, setRole] = useState('Central-Admin');
    
    return (
        <Context.Provider value={{name, setName}}>
            {children}
        </Context.Provider>
    )
}