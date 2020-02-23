import React from 'react';
import {Link} from 'react-router-dom';
import './Links.scss';

const Links = () => {
    return(
        <header className="header-nav">
            <nav className="nav">
                <h3 className="nav-logo">taskip</h3>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/"> HOME </Link>
                        </li>
                        <li>
                            <Link to="/aboutus">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">DASHBOARD</Link>
                        </li>
                        <li>
                            <Link to="/">LINK</Link>
                        </li>
                        <li>
                            <Link to="/">LINK</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </header>
    )
}

export default Links;