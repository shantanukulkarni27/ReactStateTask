import ThemeContext, { themes } from "../contexts/themeContext";
import { useContext, useState } from "react";
const ThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
        // console.log("theme changed to", theme)
    }
    return (
        <>
            <button onClick={toggleTheme}>Theme Changer</button>
        </>
    )
}
export default ThemeButton;