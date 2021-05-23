import React from 'react'


let currentYear=new Date().getFullYear();

//let currentTime=currentYear.getFullYear();


function Footer() {
    return (
        <footer>
            <p>Copyright {currentYear}</p>
        </footer>
    )
}

export default Footer
