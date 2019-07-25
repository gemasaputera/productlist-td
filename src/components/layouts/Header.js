import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <div id="myTopnav"  className="g-container topnav">
            <Link href="#" to="/" className="logo">Product List</Link>
            <nav>
                <ul>
                    <li>
                        <Link href="#" to="/cons">login</Link>
                    </li>
                    <li className="last-menu">
                        <Link href="#" to="/cons">daftar</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
export default Header;
