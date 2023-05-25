import React from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";
import { useState } from "react";
import { useCallback } from "react";

Function DarkOrLight(props){
    const [theme,setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if(theme == "light"){
            setTheme("dark");
        }else if(theme == "dark"){
            setTheme("light");
        }
    },[theme]);

    return(
        <ThemeContext.Provider value={{{theme,toggleTheme}}>
            <MainContnent />
    )
    
}

export default ThemeContext;