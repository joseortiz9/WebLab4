import React, {createContext, useContext, useState} from "react";
import {ThemeProvider} from "styled-components";
import {themes} from "../styles/Themes";

export enum CustomThemes {
    dark = 'dark',
    light = 'light',
    createch = 'createch',
    anime = 'anime',
}

export type CustomThemeContextType = {
    themeMode: CustomThemes;
    setThemeMode: (CustomTheme: CustomThemes) => void;
}

export const CustomThemeContext = createContext<CustomThemeContextType>(
    {
        themeMode: CustomThemes.light,
        setThemeMode: theme => console.warn('no theme provider')
    });
export const useCustomTheme = () => useContext(CustomThemeContext);


const CustomThemeProvider = (props: { children: React.ReactNode; }) => {
    const [themeMode, setThemeMode] = useState(CustomThemes.light);
    const customTheme = themes[themeMode];
    return (
        <CustomThemeContext.Provider value={{themeMode, setThemeMode}}>
            <ThemeProvider theme={customTheme}>
                {props.children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    );
};

export default CustomThemeProvider;