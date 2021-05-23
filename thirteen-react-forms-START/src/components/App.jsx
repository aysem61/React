import React, {useState} from "react";

function App() {
  const[name,setName]=useState("");
  //1. name="" 2. setName will update name
  function handleChange(event){
  //
    console.log(event.target.value);//Holds the etered text
    setName(event.target.value);
    
  }

  const [headingText,setHeadingText]=useState("");
  //headingText="". headingText will be updated using setHeadingtext
  //headingText wil be updated ONLY AFTER BUTTON IS CLICKED
  function handleClick(){
    setHeadingText(name);
  }
  /*NOTE:
  function handleClick(event){
    setHeadingText(event.target.value);
    //This won't work.
  }
  return (
    <div className="container">
    {/* name is being updated instantly without clicking
    headingText is being updated after click. It is dependent on the button click */}
      <h1>Hello {name} </h1>
      <h1> Hi {headingText} </h1>
      <input
      onChange={handleChange} 
      type="text" 
      placeholder="What's your name?"
      value={name} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
//WE CATCH THE ENTERED TEXT USING EVENT HANDLER


//Task. When use enter a text-headingText- 
//We should we it on the heading-h1- AFTER user clicks on the button

