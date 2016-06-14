import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';

export default class Application
{
    constructor()
    {
        ReactDOM.render(<MyComponent />, document.getElementById("root"));
    }   
}
