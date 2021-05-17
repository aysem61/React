import React from 'react';
import ReactDOM from 'react-dom';
//How to add Javascript inside the page with react
const fName='Tim';
//{} => We add javascript inside the code using curly braces
//shift +[]={}

//create a number 10 and use a const
//Then display My favourite number is 10(use javascript const to render)
const num="10";
const randomNumber=Math.floor(Math.random()*10);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Ahmet Bayram.
//Copyright 2021(js).
const name='Betul Demirkan';
console.log(name);
const fullName='Ayse Turk';
console.log(fullName);//Logs Ayse Turk is teh console.Just to check.

const currentDate=new Date();
console.log(currentDate);//
const currentYear=currentDate.getFullYear();
console.log(currentYear);
ReactDOM.render(
    <div>
   <h1>My name IS Tim</h1>
   {/*I can add js variables using {} */}
   <h1>My name is {fName}</h1>
   <h1>My name is Betul Demirkan</h1>
   <h1>My number is 10</h1>
   <h1>My favourite number is {num}</h1>
   <p>My favourite number is {6+10}</p>
   {/*I can add functions using {}*/}
   <p>My favourite number is {Math.floor(Math.random()*10)}</p>
   {/*My name is Tim(js) and my fav number is randomNumber(js)*/}
   <p>My name is Tim(js) and my fav number is randomNumber(js)</p>
   <p>My name is {fName} and my favourite number is {randomNumber}</p>
   <p> {`My name is ${fName}. My fav number ${randomNumber}`} </p>
   <p> `My name is ${fName}. My fav number ${randomNumber}`</p>
   <p>Created by {fullName}</p>
   <p>Copyringht {currentYear}</p>
</div>
,
    document.getElementById("root"));