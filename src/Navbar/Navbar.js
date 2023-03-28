import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <>
            <div className="NavMain">
                {props.home && (
                    <div className="navHomeLink NavPadding">
                        <Link className="navLink" to="/">
                            Home
                        </Link>
                    </div>
                )}
                <div className="NavInstructionButton NavPadding">
                    <Link className="navLink" to="/learn">
                        Trade
                    </Link>
                </div>
                <div className="NavAboutUs NavPadding">
                    <Link className="navLink" to="/about">
                        About Us
                    </Link>
                </div>
                <div className="NavSignIn">
                    <Link className="navLink" to="/signIn">
                        Sign Up
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Navbar;





