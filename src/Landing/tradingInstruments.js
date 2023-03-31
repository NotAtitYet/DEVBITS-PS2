import React from "react";
import './tradingInstruments.css';
import { Link } from "react-router-dom";
const TradingInstruments = () => {
    return(
        <>
            <div className="tradingInstrumentsMain">
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Stocks</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>Are you looking for a way to invest in a growing company with a promising future? Look no further than StonksUp! Our company has a proven track record of success, and we're poised for even greater growth in the coming years. But don't just take our word for it - do your own research and see for yourself why StonksUp is a great investment opportunity. We're confident that once you do, you'll be eager to invest in our company and join us on this exciting journey.

So why wait? Invest in StonksUp stock today and start building your portfolio with a company that has a bright future ahead!</p>
                    </div>
                    <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button><Link to="/learn">GO</Link></button>
                    </div>
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Heading</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>Looking for a stable and secure investment opportunity? Consider buying bonds in StonksUp! Our company offers a range of high-quality bonds that provide a reliable source of income and steady returns. 
                        Investing in bonds can also provide peace of mind, as they are typically less volatile than stocks and offer a predictable income stream. And with StonksUp, you can be sure that your investment is in good hands, as we have a strong financial position and a commitment to responsible investing.

So why not invest in our bonds today and start earning a steady income while preserving your capital? With StonksUp, you can invest with confidence and enjoy the benefits of a stable and secure investment opportunity.
                        </p>
                    </div>
                    <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button><Link to="/learn">GO</Link></button>
                    </div>
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Crypto</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>Looking to invest your money in a modern and secure way? Look no further than cryptocurrencies! Cryptocurrencies, such as Bitcoin and Ethereum, offer a decentralized and peer-to-peer network, ensuring that your transactions are secure and private. With cryptocurrencies, you can make fast, low-cost transactions without the need for intermediaries like banks. Plus, the value of cryptocurrencies has steadily increased over time, making them a smart investment choice for those looking to diversify their portfolios. So why wait? Start investing in cryptocurrencies today and reap the benefits of this exciting and innovative technology.</p>
                    </div>
                    <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button><Link to="/crypto">GO</Link></button>
                    </div>
                </div>
                
            </div>
        </>
    );
}


export default TradingInstruments;

