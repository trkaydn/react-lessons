import { useState } from "react";

export default function useInput(initialValue) {

    const [value, setValue] = useState(initialValue);
    const [isEdited, setIsEdited] = useState(false);

    function handleInputBlur(e) {
        setIsEdited(true);
    }

    function handleInputChange(e) {
        setValue(e.target.value);
        setIsEdited(true);
    }

    return {
        value,
        handleInputChange,
        handleInputBlur,
        isEdited
    };
}