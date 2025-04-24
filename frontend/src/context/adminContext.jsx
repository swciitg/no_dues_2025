import { createContext, useState } from "react";

export const AdminContext = createContext()
export const AdminContextProvider = ({children})=>{
     
    const [studData , setStudData] = useState([]);
    const [mapData, setMapData] = useState({});

    return (
        <AdminContext.Provider value={{studData , setStudData, mapData, setMapData}}>
            {children}
        </AdminContext.Provider>
    )
}