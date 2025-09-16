import { useEffect, useState } from "react";
// import { hexToRgbUtility } from "../utility/stringUtility";
import { ThemeContext } from "./context/ThemeContext";


export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState({
        primaryColor: "#00dbfdff",
        secondaryColor: "#f5b728ff",
        tertiaryColor: "#e7e5e1ff"
    })

    useEffect(() => {
        if (theme) {
            const root = document.documentElement;
            root.style.setProperty('--color-primary', (theme.primaryColor));
            root.style.setProperty('--color-secondary', (theme?.secondaryColor));
            root.style.setProperty("--color-tertiary", (theme?.tertiaryColor))
        }
    }, [theme?.primaryColor, theme?.secondaryColor, theme?.tertiaryColor])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}