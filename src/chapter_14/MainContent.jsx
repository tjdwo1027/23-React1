import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props){
    const{ theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div
        style={{
            width:"100vw",
            height:"100vh",
            padding: "1.5rem"
        }}
        >

        </div>
    )
}

export default ThemeContext;