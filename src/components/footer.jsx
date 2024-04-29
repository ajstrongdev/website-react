import React from 'react';

function GetYear() {
    let currentYear = new Date().getFullYear();
    return(<span>{currentYear}</span>);
}

function Footer() {
    return(
        <div className="w-[90%] bg-aj-border p-8 md:hover:scale-105 transition-all h-auto m-auto mt-16 mb-8 rounded-[0.65em] shadow-2xl">
            <div className="lg:grid lg:grid-cols-2 text-center lg:text-left">
                <div>
                    <p className="text-white text-2xl">&#169; <GetYear /> <span className="text-dracula-pink">AJStrong</span>.</p>
                </div>
                <div>
                    <p className="text-dracula-pink text-2xl lg:float-right"><a class="opacity-80 hover:opacity-60 transition-all" href="https://x.com/ajstrongdev">Twitter / X</a></p>
                    <p className="text-dracula-pink text-2xl lg:float-right"><a class="opacity-80 hover:opacity-60 transition-all" href="https://github.com/ajstrongdev">GitHub&nbsp;&nbsp;</a></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;