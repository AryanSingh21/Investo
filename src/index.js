import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
   
  </div>
);

var moo = document.getElementById("darkMode");
var bacg= document.getElementById("root")
moo.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    bacg.style.backgroundImage.url="none"
  }else{
    bacg.style.backgroundImage.url=("./bg-pattern.svg")
  }
}




reportWebVitals();
