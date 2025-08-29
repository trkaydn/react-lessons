import './ThemeSelector.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const themeColours = ["warning", "danger", "secondary", "primary", "success"];

export default function ThemeSelector() {

    const { changeColor, mode, changeMode } = useContext(ThemeContext);

    function toggleMode() {
        changeMode(mode === "light" ? "dark" : "light");
    }

    return (
        <div className="container theme-selector">
            <div className="mode-toggle">
                <i className={`bi bi-${mode === "light" ? "moon" : "sun"}-fill`} onClick={toggleMode}></i>
            </div>
            <div className="theme-links">
                {
                    themeColours.map(color => (
                        <span key={color} className={`bg-${color}`} onClick={() => changeColor(color)}></span>
                    ))
                }
            </div>
        </div>
    );
}