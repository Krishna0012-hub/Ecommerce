import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import th from '../Assets/th.jpg';
import cart_icon from '../Assets/cart_icon.jpg';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={th} alt="Shopper Logo" style={{ height: "40px", borderRadius: "9px" }} />
                    <span className="ms-2 fw-bold">SHOPPER</span>
                </Link>

                {/* Toggle Button for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item" onClick={() => setMenu("shop")}>
                            <Link className="nav-link" to="/">Shop</Link>
                            {menu === "shop" && <hr />}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("Men")}>
                            <Link className="nav-link" to="/mens">Men</Link>
                            {menu === "Men" && <hr />}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("Women")}>
                            <Link className="nav-link" to="/womens">Women</Link>
                            {menu === "Women" && <hr />}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("Kids")}>
                            <Link className="nav-link" to="/kids">Kids</Link>
                            {menu === "Kids" && <hr />}
                        </li>
                    </ul>

                    {/* Login & Cart */}
                    <div className=" nav-login-cart d-flex align-items-center">
                        <Link to="/login">
                            <button className="btn btn-primary me-3">Login</button>
                        </Link>
                        <Link to="/cart" className="position-relative">
                            <img src={cart_icon} alt="Cart" style={{ height: "40px" }} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
