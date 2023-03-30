import React from "react";
import './instruments.css';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Instrument = () => {
    return (
        <>
            <Navbar home={true} />
            <div className="instruMain">
                <div className="instruBg">
                    <img className="landingBg1" src="../assets/bg4.jpg" alt="" />
                    <img className="landingBg2" src="../assets/bg1.png" alt="" />
                </div>
                <div className="instruBoxContainer">
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Stocks</h1>
                            <p className="contentPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium quibusdam dicta sint ratione optio fuga, saepe, possimus doloribus deserunt voluptas, ab vitae dolorum officiis assumenda labore necessitatibus temporibus architecto asperiores voluptate aspernatur veniam! Veniam maiores non ipsum harum possimus.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                <h2 className="buttonText"><Link to="/stocks" className="navLink">
                                   Proceed to buy </Link> </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Bonds</h1>
                            <p className="contentPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium quibusdam dicta sint ratione optio fuga, saepe, possimus doloribus deserunt voluptas, ab vitae dolorum officiis assumenda labore necessitatibus temporibus architecto asperiores voluptate aspernatur veniam! Veniam maiores non ipsum harum possimus.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <h2 className="buttonText">Proceed To Buy</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">CryptoCurrency</h1>
                            <p className="contentPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium quibusdam dicta sint ratione optio fuga, saepe, possimus doloribus deserunt voluptas, ab vitae dolorum officiis assumenda labore necessitatibus temporibus architecto asperiores voluptate aspernatur veniam! Veniam maiores non ipsum harum possimus.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                <h2 className="buttonText"><Link to="/crypto" className="navLink">
                                   Proceed to buy </Link> </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Instrument;