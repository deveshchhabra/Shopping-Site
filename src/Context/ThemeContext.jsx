import React,{useContext,createContext, useState} from 'react'

const ThemeContext=createContext();//??--->create the context 
// basically ek container jisme hum kuch values (jaise theme, user, language etc.)
//  store kar sakte hain, 
// aur phir usse kisi bhi component mein use kar sakte hain bina props pass kiye.
export const useTheme=()=>useContext(ThemeContext);
// useContext se hum us context object ko kisi bhi component mein
//  consume kar sakte hain — matlab usme se value nikal sakte hain

const ThemeProveder = ({children}) => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme=(mode)=>setTheme(mode)
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div className={`${theme==='dark'?'bg-black text-white':'bg-white text-black'}`}>
            {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProveder