import React, {useState} from 'react'
import './App.css';
import Header from './Header';
import Results from './Results';
import SearchBox from './SearchBox';


const name = require('@rstacruz/startup-name-generator');

const App = () => {
    const[HeaderExpanded,setHeaderExpanded]=useState(true);
    const[SuggestedNames, setSuggestedNames]=useState([]);

 const HandleChange = (inputText) => {
        console.log("input text : ", inputText)     
        setHeaderExpanded(!inputText); //if empty string then return false
        setSuggestedNames(inputText ? name(inputText) : []);
    };

    return (
        <div>
            <Header HeaderExpanded={HeaderExpanded}/>
            <SearchBox handling= {HandleChange}/>
            <Results SuggestedNames={SuggestedNames} />
        </div>
    )
}

export default App

