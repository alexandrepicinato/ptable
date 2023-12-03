import React, { createContext, useContext, useState } from "react";
export const SelectedElementContext = createContext();
export default function SelectedElementProvider({children}){
    const[SelectedElementid, setSelectedElementid]= useState(2);
    return <SelectedElementContext.Provider value={{SelectedElementid,setSelectedElementid}}>{children}</SelectedElementContext.Provider>
}
export function useSelectedElement(){
    const context= useContext(SelectedElementContext)
    const {SelectedElementid, setSelectedElementid} = context;
    return {SelectedElementid, setSelectedElementid}

}