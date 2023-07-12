"use client"
import React from "react"
import "./login.css"

import { login } from "../../services/firebase/auth"
import "./login.css"

export default funcion login () {
    return(
        <div className="container">
         <input placeholder="email" type="text" />
         <input placeholder="123456"type="password" />
         <button>login</button>
        </div>
    ) 
    
}