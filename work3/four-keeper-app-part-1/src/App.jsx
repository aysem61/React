import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
    return (
        <div>
        <Header/>
        <Footer/>
        <Note name="Ayse" surname="Turk" age="32"/>
        <Note name="Iskender" surname="Can"  age="35"/>
        <Note name="Serhat" surname="kral"  age="22"/>
        </div>
    )
}
export default App;