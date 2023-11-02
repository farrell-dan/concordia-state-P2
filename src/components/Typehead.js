import styled from "styled-components";
import { useState } from "react";

const Typehead = ({ suggestions, handleSelect, categories }) => {
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

  const splitString = (str, index) => {
    const firstHalf = str.slice(0, index);
    const secondHalf = str.slice(index);
    return [firstHalf, secondHalf];
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
          const lowerCaseInput = inputValue.toLowerCase();
          const lowerCaseSuggestion = suggestion.title.toLowerCase();
          const matchIndex = lowerCaseSuggestion.indexOf(lowerCaseInput);

          const [firstHalf, secondHalf] = splitString(
            suggestion.title,
            matchIndex + inputValue.length
          );

          const category = categories[suggestion.categoryId];

          return (
            <Suggestion
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.title)}
            >
              <span>
                {firstHalf}
                <Prediction>{secondHalf}</Prediction>
              </span>
              {category && (
          <CategoryTitle>
            <CategoryTitleText>{category.name}</CategoryTitleText>
          </CategoryTitle>
        )}
            </Suggestion>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Typehead;

const Wrapper = styled.div`
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
background-color: lightgreen;
:hover{
    background-color: lightgoldenrodyellow;
}
`

const Prediction = styled.span`
  font-weight: bold;
`;

const CategoryTitle = styled.div`
  color: purple;
  font-style: italic;
`;

const CategoryTitleText = styled.div`
  color: purple;
  font-style: italic;
  font-size: 12px;
`;