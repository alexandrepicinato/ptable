import React, { createContext, useContext, useState } from "react";
export const PageContext = createContext();
export default function PageProvider({children}){
    const[Pageid, setPageid]= useState(1);
    return <PageContext.Provider value={{Pageid,setPageid}}>{children}</PageContext.Provider>
}
export function usePage(){
    const context= useContext(PageContext)
    const {Pageid, setPageid} = context;
    return {Pageid, setPageid}

}