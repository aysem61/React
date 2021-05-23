import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Header";

ReactDOM.render(
  <div>

    <Header />
    <App link="https://www.techproeducation.com/"
    />
    <App name="Jim Carrey"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU"
      phone="+123 456 789"
      email="j@carrey.com"

    />

    <App name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      phone="+918 372 574"
      email="gmail@chucknorris.com"
    />

    <Header />

    <App
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+987 654 321"
      email="jack@nowhere.com"
    />
  

  </div>,
  document.getElementById("root")
);
