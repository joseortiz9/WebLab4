import React from "react";
import {CustomThemes, useCustomTheme} from "../../contexts/CustomThemeProvider";
import {ThemeSelect} from "./Select.styles";

const ThemeSelector = () => {
    const { setThemeMode } = useCustomTheme();
    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setThemeMode(e.target.value as CustomThemes);
    };
    return (
        <ThemeSelect onChange={handleThemeChange}>
            <option value="light">Light theme</option>
            <option value="dark">Dark theme</option>
            <option value="createch">Createch theme</option>
            <option value="anime">Anime theme</option>
        </ThemeSelect>
    );
};

export default ThemeSelector;
