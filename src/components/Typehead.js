import styled from "styled-components";
import { useState } from "react";

const Typehead = ({ suggestions, handleSelect }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => { 
        if (event.key === "Enter") {
            handleSelect(event.target.value)
        }
    };

    const handleClear = () => {
        setInputValue("");
    };

    return (
        <div>
            <input 
                value={inputValue} 
                onChange={handleInputChange} 
                onKeyDown={handleKeyPress} />
            <ClearBTN onClick={handleClear}>Clear</ClearBTN>
        </div>
    )
}

export default Typehead;

const ClearBTN= styled.button`
background-color: purple;
color: white;
border-radius: 15%;
border: none;
margin-left: 10px;
`