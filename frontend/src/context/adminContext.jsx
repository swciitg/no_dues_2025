import { createContext, useState } from "react";

export const AdminContext = createContext()
export const AdminContextProvider = ({children})=>{
     
    const [studData , setStudData] = useState([]);
    
    // pre processing of data received from the backend:
    // backend sends the data of student - each student has a dues section which will be used to segregate the data
    // pre proccess the data according to the fake data api

    return (
        <AdminContext.Provider value={{studData , setStudData}}>
            {children}
        </AdminContext.Provider>
    )
}