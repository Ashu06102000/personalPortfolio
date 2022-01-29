import React from 'react'
import 'D:/portfolio/portfolio/src/component/CSS/Footer.css'
export default function Footer({mode}) {
    return (
        <>
        <div className='footer'>
            <p style={{ color: mode === "white" ? "black" : "white" }}>yash chandrakant thakur <br /> all content ©</p>
            <div>
                <p style={{ color: mode === "white" ? "black" : "white" }}>MAIL ME</p>
                <p style={{ color: mode === "white" ? "black" : "white" }}>yash6102000thakur@gmail.com</p>
            </div>
        </div>
        </>
    )
}
