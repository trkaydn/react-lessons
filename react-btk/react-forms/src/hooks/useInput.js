import { useState } from "react";

export default function useInput(initialValue, validationFunc) {

    const [value, setValue] = useState(initialValue);
    const [isEdited, setIsEdited] = useState(false);

    const isValid = validationFunc(value);

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
        hasError: !isValid && isEdited
    };
}