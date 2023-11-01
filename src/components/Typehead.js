import styled from "styled-components";
import { useState } from "react";

const Typehead = ({ suggestions, handleSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInputValue(inputText);
    const filtered = suggestions.filter((suggestion) => {
      const lowerCaseInput = inputText.toLowerCase();
      const lowerCaseSuggestion = suggestion.title.toLowerCase();

      return (
        lowerCaseSuggestion.includes(lowerCaseInput) && inputText.length >= 2
      );
    });

    setFilteredSuggestions(filtered);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && filteredSuggestions.length > 0) {
      handleSelect(filteredSuggestions[0].title);
    }
  };
  const handleClear = () => {
    setInputValue("");
    setFilteredSuggestions([]);
  };

  return (
    <Wrapper>
        <TopWrapper>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <ClearBTN onClick={handleClear}>Clear</ClearBTN>
      </TopWrapper>
      <ul>
        {filteredSuggestions.map((suggestion) => {
          return (
            <Suggestion
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.title)}
            >
              {suggestion.title}
            </Suggestion>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Typehead;

const Wrapper = styled.div`
  background-color: lightpink;
  width: 75%;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ClearBTN = styled.button`
  background-color: purple;
  color: white;
  border-radius: 15%;
  border: none;
  margin-left: 10px;
`;

const Suggestion = styled.li`
padding-top: 10px;
:hover{
    background-color: lightgoldenrodyellow;
}
`