import React from 'react';
import '../menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {
    const menuItems = [
        {name : 'LoGo', path: '/' },
        { name: 'Dashboard', path: '/dashBoard' },
        { name: 'Projects', path: '/projects' },
        { name: 'Teams', path: '/teams' },
        { name: 'Calendar', path: '/calendar' },
        { name: 'Documents', path: '/documents' },
        { name: 'Reports', path: '/reports' },
        { name: 'Settings', path: '/settings' }
    ];
    
    return (
        <div className="menu-container">
            <div className="menuList">
                <header className="logo">
                    <h2>LoGo</h2>
                </header>

                <ul className="ul-menu">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Menu;
