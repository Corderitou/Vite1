import "./aniMenu.css"
import ReactDOM from 'react-dom/client'
import { useEffect, useState } from "react"

function MatedMenu(){
   const a = document.querySelector(".line1")
   const b = document.querySelector(".line2")
   const c = document.querySelector(".line3")
    return(
       <div className="menucon" onClick={() => {
        a.classList.add("line2af");
        b.classList.add("line1af");
        c.classList.add("line3af");
       }}>
          <div className="line1"></div>
          <div className="line2 a"></div>
          <div className="line3 a"></div>
          {
         console.log(a)
       }
       </div>
       
    )
}
export default MatedMenu