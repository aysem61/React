import React from 'react';

{/* <h2>Jim Carrey</h2>
<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVl6f7CWwdVCgb_bEHUT9ZuoY8wz50EET_dw&usqp=CAU"
  alt="avatar_img"
/>
<p>+123 456 789</p>
<p>j@carrey.com</p> */}




function App(props) {
  return (
    <div className="div">

      <h1 className="h1">My Contacts</h1>

      <h5 class="yb">TABLES</h5>
      <table className="table">
        <thead>
          <th>Name</th>
          <th>City</th>
          <th>Phone</th>
        </thead>
        <tr>
          <td>John</td>
          <td>Dallas</td>
          <td>9999999</td>
        </tr>
        <tr>
          <td>Sam</td>
          <td>LA</td>
          <td>1111111</td>
        </tr>
      </table>

      <h6 id="hf">IFRAMES</h6>
      <iframe src="https://en.wikipedia.org/wiki/Main_Page"></iframe>




      <h2 className="h2" style={{ color: "red" }}>{props.name}</h2>
      <hr className="hr" />
      <h3>Adding Link</h3>
      <a className="a" target="_blank" >{props.link}</a>

      <img className="img"
        src={props.img}
        alt="avatar_img"
      />
      <p className="phone">{props.phone}</p>
      <p className="email">{props.email}</p>
      {/* 
<h2>Chuck Norris</h2>
<img
  src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
  alt="avatar_img"
/>
<p>+918 372 574</p>
<p>gmail@chucknorris.com</p>   */}
    </div>
  )
}

export default App;
