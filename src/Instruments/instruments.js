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
                            <p className="contentPara">We're constantly innovating and expanding our offerings, and we have a dedicated team of professionals who are committed to our long-term success. By investing in our stock, you'll become a part of our company's growth story and have the potential to earn significant returns.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stock">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Bonds</h1>
                            <p className="contentPara">Our bonds are backed by our company's assets and have a proven track record of performance. They provide a fixed rate of return and are a great way to diversify your investment portfolio while minimizing risk.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">CryptoCurrency</h1>
                            <p className="contentPara">One of the main features of cryptocurrency is that it allows for secure and anonymous transactions without the need for a central authority, such as a bank or government. It also allows for quick and low-cost cross-border payments, making it an attractive alternative to traditional payment methods.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/crypto">
                                        Proceed To Buy
                                    </Link>
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