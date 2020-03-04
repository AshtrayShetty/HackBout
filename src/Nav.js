import React from 'react'
import {Link} from "react-router-dom"

const header={
    fontSize: '22px', 
    textDecoration: 'none'
};

const Nav=()=>{
    return(
            <nav>
                <ul>
                    <Link to="/" style={header}><li style={header}>Dashboard</li></Link>
                    <li className="links" id="user-id"><i className="fas fa-user"></i> User Id</li>
                    <Link to="/account/create" className="links"><li >Create Account</li></Link>
                    <Link to="/account/delete" className="links"><li>Remove Account</li></Link>
                    <Link to="/logout" className="links"><li><i className="fas fa-power-off"></i> Logout</li></Link>
                </ul>
            </nav>  
    );
}

export default Nav;