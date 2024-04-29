import React, { useState } from "react";

const Prices = {
    total: 60,
    service: 0,
    pages: 0,
    delivery: 0,
}

function QuoteItem({itemid, title, content, flipButton}) {
    return (
        <div className="item shadow-2xl md:hover:scale-105 border-solid border-aj-border border-2 p-4 rounded-[0.65em] transition-all mb-4" id={itemid} onClick={() => flipButton(itemid)}>
            <h1 className="text-white text-3xl text-normal">{title}</h1>
            <p className="text-off-white text-2xl">{content}</p>
        </div>
    );
}

function Quote() {
    const [quote, setQuote] = useState(60);

    function flipButton(itemid) {
        if (itemid === "standard" || itemid === "extra") {
            clearButton("service");
            Prices.service = itemid === "standard" ? 0 : 30;
            updateButton(itemid);
        }
        if (itemid === "14" || itemid === "59" || itemid === "10p") {
            clearButton("pages");
            Prices.pages = itemid === "14" ? 0 : itemid === "59" ? 15 : 30;
            updateButton(itemid);
        }
        if (itemid === "express" || itemid === "fast" || itemid === "regular") {
            clearButton("delivery");
            Prices.delivery = itemid === "express" ? 30 : itemid === "fast" ? 15 : 0;
            updateButton(itemid);
        }
        setQuote(calculateQuote());
    }

    function clearButton(type) {
        let items = {
            service: ["standard", "extra"],
            pages: ["14", "59", "10p"],
            delivery: ["express", "fast", "regular"],
        }
        if (type === "service") {
            items.service.forEach(element => {
                document.getElementById(element).style.borderColor = "rgba(255, 255, 255, 0.1)";
                document.getElementById(element).style.boxShadow = "0 0 0";
            });
        }
        if (type === "pages") {
            items.pages.forEach(element => {
                document.getElementById(element).style.borderColor = "rgba(255, 255, 255, 0.1)";
                document.getElementById(element).style.boxShadow = "0 0 0";
            });
        }
        if (type === "delivery") {
            items.delivery.forEach(element => {
                document.getElementById(element).style.borderColor = "rgba(255, 255, 255, 0.1)";
                document.getElementById(element).style.boxShadow = "0 0 0";
            });
        }
    }

    function updateButton(itemid) {
        document.getElementById(itemid).style.borderColor = "#FF79C6";
        document.getElementById(itemid).style.boxShadow = "0 0 10px #FF79C6";
    }

    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    function calculateQuote() {
        return Prices.total + Prices.service + Prices.pages + Prices.delivery;
    }

    return(
        <div className="lg:w-[90%] m-auto">
            <div className=" p-4 pt-0 m-auto" id="get-a-quote">
                <h1 className="text-center font-medium text-dracula-pink text-5xl lg:text-8xl">
                    Get a quote
                </h1>
                <h1 className="text-dracula-pink mt-8 text-4xl text-center md:text-left lg:text-5xl">
                    Please select a service
                </h1>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 m-auto pt-0 p-4">
                <QuoteItem itemid="standard" title="Website Design & Development" content="I will construct a wireframe and colour pallete, and then once approved, develop your website." flipButton={flipButton} />
                <QuoteItem itemid="extra" title="Design, Development + Content writing" content="In addition to design and development, I will also write the content for your website." flipButton={flipButton} />
            </div>

            <div className=" p-4 pt-0 m-auto">
                <h1 className="text-dracula-pink mt-8 text-4xl text-center md:text-left lg:text-5xl">
                    Number of pages
                </h1>
            </div>
            <div className=" lg:grid lg:grid-cols-3 lg:gap-8 m-auto p-4">
                <QuoteItem itemid="14" title="1-4 Pages" content="I will construct a Wireframe and colour pallete, and then once approved, develop your 1-4 page website." flipButton={flipButton} />
                <QuoteItem itemid="59" title="5-9 Pages" content="I will construct a Wireframe and colour pallete, and then once approved, develop your 5-9 website." flipButton={flipButton} />
                <QuoteItem itemid="10p" title="10+ Pages" content="In addition to design and development, I will also write the content for your 10+ pages website." flipButton={flipButton} />
            </div>

            <div className=" p-4 pt-0 m-auto">
                <h1 className="text-dracula-pink mt-8 text-4xl text-center md:text-left lg:text-5xl">
                    Delivery time
                </h1>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8 m-auto pt-0 p-4">
                <QuoteItem itemid="express" title="2-3 Business Days" content="I will complete your website in 2-3 business days." flipButton={flipButton} />
                <QuoteItem itemid="fast" title="3-5 Business Days" content="I will complete your website in 3-5 business days." flipButton={flipButton} />
                <QuoteItem itemid="regular" title="5-9 Business days" content="I will complete your website in 5-9 business days." flipButton={flipButton} />
            </div>

            <div className=" m-auto text-wrap">
                <h1 className="text-white p-4 text-3xl lg:text-5xl">
                    Estimated quote: <span className="text-dracula-pink">{formatter.format(quote)}</span>
                </h1>
                <h1 className="text-white p-4 text-3xl lg:text-5xl">Email me: <br /><span className="text-dracula-pink">ajstrongdev@proton.me</span></h1>
            </div>
        </div>
    );
}

export default Quote;