import React from 'react';

function Header() {
    return (
        <div className="lg:w-[65%] p-4 lg:p-8 m-auto hero">
            <h1 className="text-5xl pt-16 text-center lg:text-8xl text-dracula-pink font-medium">
                AJStrong
            </h1>
            <p className="text-center text-2xl lg:text-3xl text-off-white mt-4">
                Website developer, designer & open source contributor.
            </p>
        </div>
    );
}

export default Header;