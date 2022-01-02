import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import AutoSuggest from "react-autosuggest";

const companies = [
      { id: 1, name: "Gmail" },
      { id: 2, name: "Gmail Blog" },
      { id: 3, name: "Gmail Support" },
      { id: 4, name: "Gmail Contact" },
      { id: 5, name: "Gmail Account" },
      { id: 6, name: "Gmail Sign Up" },
      { id: 7, name: "Gmail Sign In" }
]

const lowerCasedCompanies = companies.map(company => {
  return {
    id: company.id,
    name: company.name.toLowerCase()
  };
});

const TodoForm = (props) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(value) {
    return lowerCasedCompanies.filter(company =>
      company.name.includes(value.trim().toLowerCase())
    );
  }

    const handleChange = e => {
     setValue(e.target.value);
    };
 
  const handleSubmit = e => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.floor(Math.random() * 10000),
          text: value
        });
        setValue('');
      };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={value}
            onChange={handleChange}
            name='text'
            // ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          console.log(value);
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={suggestion => suggestion.name}
        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: "Type gmail",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          }
        }}
        highlightFirstSuggestion={true}
      />
      )}
    </form>
  );
};


export default TodoForm;

