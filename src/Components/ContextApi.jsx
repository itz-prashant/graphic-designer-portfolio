import React, { createContext, useState } from 'react'

export const Context = createContext()

export const AppContext = (props)=>{
    const [menu, setMenu] = useState(false)
    return(
        <Context.Provider value={{
            menu, setMenu
        }}>
            {props.children}
        </Context.Provider>
    )
}