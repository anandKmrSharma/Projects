
import React,{createContext, useState} from "react";

export const ThemeContext= createContext();
const ThemeContextProvider= ({children})=>{

    const [theme, setTheme] = useState("light");
    const changeTheme=(val)=>{
    theme==="light" ? setTheme("dark"): setTheme("light")
    }
    return <>
    <ThemeContext.Provider value={{changeTheme, theme}}>{children}</ThemeContext.Provider>
    </>
}
export {ThemeContextProvider}




// import {createContext, useState} from "react";

// export const ThemeContext= createContext({theme:" ", themeChanege: ()=>{}});

// const ThemeContextProvider = ({children})=>{
//     const [theme, setTheme]= useState("light");
//     const themeChanege= ()=>{
//         setTheme(theme==="light" ? "dark": "light");
//     }
//     return <>
//     <ThemeContext.Provider value= {{theme, themeChanege}}>
//         {children}
//     </ThemeContext.Provider>
//     </>

// }

// export {ThemeContextProvider}