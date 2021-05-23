import React ,{useState} from "react";

function App() {

function handleClick(){
  //Update the haeding when Submit button is clicked
  //console.log("Testing if handleClick function works")
  setHeadingText("Submitted!")//=>headingText="Submitted!";
}


//const headingText="Hello";
const[headingText,setHeadingText]=useState("Heading");
//1.headingText="Hello" 2.setHeadingText created to change the heading
function handleMouseOver(){
  //console.log("Mouse Over")//Testing on the console
  setMouseOver(true)//=>isMouseOver=true when handleMouseOver is 
}
const[isMouseOver,setMouseOver]=useState(false);
//1.isMouseOver=false
//2.setMouseOver will update isMouseOver
function handleMouseOut(){
  setMouseOver(false)//=>isMouseOver=false
}
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      style={{background:isMouseOver?"black":"white"}}>Submit</button>
    </div>
  );
}

export default App;
//TASK1: When user clicks on Submit button,
//Then Hello will be replaced to Submitted!
//TASK2: When we hover over the submit button, the backgroud color should be black
// When we move the mouse out, tehn background color should be white
