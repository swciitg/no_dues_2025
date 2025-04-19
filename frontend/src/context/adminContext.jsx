import { createContext, useState } from "react";

export const AdminContext = createContext()
export const AdminContextProvider = ({children})=>{
     
    const [studData , setStudData] = useState([]);
    const [mapData, setMapData] = useState({});

    // pre processing of data received from the backend:
    // backend sends the data of student - each student has a dues section which will be used to segregate the data
    // pre proccess the data according to the fake data api
    // the central admin will access data at three levels - level3:Board, level2:Subsection, level1:students
    // anyother admin will access data till level1 or level2 

    return (
        <AdminContext.Provider value={{studData , setStudData, mapData, setMapData}}>
            {children}
        </AdminContext.Provider>
    )
}