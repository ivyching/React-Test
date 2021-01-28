import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = React.useState(0);
    const [errorMessage, setErrorMessage] = React.useState("");
  return (
      <div data-test="component-app" className="App">
        <h1 data-test="counter-display">The counter is currently  <span data-test="count">{count}</span></h1>
          <button onClick={()=>{
                  setErrorMessage("")
                  setCount(count+1)


          }} data-test="increment-button">counter+</button>
          <button onClick={()=>{

              if(count==0){
                  setErrorMessage("XXXX")
              }else{
                  setCount(count-1)
              }
          }} data-test="decrement-button">counter-</button>
          <span data-test="errorMessage">{errorMessage!==""?errorMessage:""}</span>
      </div>
  );
}

export default App;
