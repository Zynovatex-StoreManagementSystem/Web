import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpeg';
import dashboardicon from '../assets/dashboardicon.png';
import warehouse from '../assets/warehouse.png';
import customer from '../assets/customer.png';
import categories from '../assets/categories.png';
import order from '../assets/order.png';
import settings from '../assets/settings.png';
import login from '../assets/login.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { path: "/", icon: dashboardicon, label: "Dashboard" },
        { path: "/customer", icon: customer, label: "Customers" },
        { path: "/categories", icon: categories, label: "Categories" },
        { path: "/order", icon: order, label: "Orders" },
        { path: "/warehouse", icon: warehouse, label: "Warehouses" }
    ];

    const settingsItems = [
        { path: "/settings", icon: settings, label: "Settings" },
        { path: "/login", icon: login, label: "Login" }
    ];

    return (
        <nav className="bg-gradient-to-b from-[#006d00] to-[#00cc00] text-white h-screen fixed top-0 left-0 w-1/5 pt-20">
            <div className="flex flex-col items-center">
                <div>
                    <img 
                        src={logo} 
                        alt="logo" 
                        className="mx-auto mb-10 hover:scale-125 hover:border-6 border-emerald-400" 
                    />
                </div>

                <div className="cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="space-y-2">
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                        <div className="w-8 h-0.5 bg-white"></div>
                    </div>
                </div>

                <ul className={`md:block ${menuOpen ? "block" : "hidden"} w-full`}>
                    {menuItems.map((item, index) => (
                        <li key={index} className="nav-item" onClick={() => setMenuOpen(false)}>
                            <NavLink 
                                to={item.path} 
                                className="flex items-center py-5 pl-12 hover:bg-emerald-400 hover:text-black"
                                activeClassName="bg-emerald-500"
                            >
                                <img src={item.icon} alt={item.label} width="20" height="20" className="mr-2" />
                                {item.label}
                            </NavLink>
                        </li>
                    ))}

                    <br />

                    <div className="settings_login">
                        {settingsItems.map((item, index) => (
                            <li key={index} className="nav-item" onClick={() => setMenuOpen(false)}>
                                <NavLink 
                                    to={item.path} 
                                    className="flex items-center py-5 pl-12 hover:bg-emerald-400 hover:text-black"
                                    activeClassName="bg-emerald-500"
                                >
                                    <img src={item.icon} alt={item.label} width="20" height="20" className="mr-2" />
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

