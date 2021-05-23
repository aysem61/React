import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"
// export default notes;

function App() {
  return (
    <div>
      <Header />
      {/* <Note title ="This is the note title"
        content="This is the note content"/> */}
      {notes.map
        ((singleNote) => {
          // console.log(singleNote)
          return <Note
            key={singleNote.key}
            title={singleNote.title}
            content={singleNote.content} />
        })}
      <Footer />
    </div>
  );
}
export default App;