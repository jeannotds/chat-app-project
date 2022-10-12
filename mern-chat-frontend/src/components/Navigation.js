
import React from "react"
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import  '../styles/navigation.css'

const Navigation = () => {
    return(
        <div className="navigation" style={{height: "45px", backgroundColor: "grey", margin: "0 0 30px 0"}}>
            <Link to="/">Logo</Link>
            <nav className="routes">
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/chat">Chat</Link>
            </nav>
        </div>
    )
}

export default Navigation