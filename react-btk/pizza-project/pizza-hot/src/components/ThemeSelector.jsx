import './ThemeSelector.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

const themeColours = ["warning", "danger", "secondary", "primary", "success"];

export default function ThemeSelector() {

const { color, setColor } = useContext(ThemeContext);
    
    return (
        <div className="container theme-selector">
            <div className="theme-links">
                {
                    themeColours.map(color => (
                        <span key={color} className={`bg-${color}`} onClick={() => setColor(color)}></span>
                    ))
                }
            </div>
        </div>
    );
}