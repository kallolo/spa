import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <div>
        <ul>
            <li><a href="/">Home</a></li> {/* reload halaman */}
            <li><Link to="/login">Login</Link></li> {/* tanpa reload halaman (SPA) */}
        </ul>
    </div>
)

export default Menu