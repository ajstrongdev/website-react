import React from "react";
import Header from "../components/header";
import Footer from '../components/footer';

export default function Home() {
    return (
        <main>
            <Header />
            <div className="about-container w-[100%] h-[auto] bg-[url('/assets/banner.png')] bg-no-repeat bg-center-x bg-center-y bg-cover">
                <h1 className="text-dracula-pink text-9xl p-8 pb-0 text-center font-bold">404.</h1>
                <p className="text-off-white text-3xl p-0 text-center">Oops! The page you are looking for couldn't be found.</p>
                <p className="text-center pb-8 m-auto font-light text-off-white text-2xl mt-8">
                    <a href="../" className="bottom-0 bg-dracula-pink rounded-xl hover:scale-105 text-black p-2 shadow-2xl">Go home</a>
                </p>
            </div>
            <Footer />
        </main>
    );
}