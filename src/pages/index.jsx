import React from 'react';
import Header from '../components/header';
import PortfolioCard from '../components/portfolio';
import Quote from '../components/quote';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="about-container w-[100%] h-[auto] bg-[url('/assets/banner.png')] bg-no-repeat bg-center-x bg-center-y bg-cover">
        <div className="about-container-shadow overlay bg-overlay">
          <div className="lg:w-[65%] mt-16 m-auto lg:p-8 p-4">
            <h1 className="font-medium text-dracula-pink text-5xl lg:text-8xl text-center">
              About me
            </h1>
            <p className="text-off-white text-2xl lg:text-3xl mt-8">
              Hey, I'm AJ. I'm a software engineer, freelance website developer and computer nerd. I have always been interested in technology, specifically website development. I started learning website development in my early teens, and have been hooked ever since.
            </p>
            <p className="text-off-white text-2xl lg:text-3xl mt-8">
              I am currently utilising multiple different languages, frameworks and libraries. React, Next.js, Tailwind CSS, PHP, C#, Go and Rust are some of my favourite languages to utilise. I am also a contributor to multiple open source projects, including Rhino Linux, SkyWM and Pylure.
            </p>
            <p className="text-off-white text-2xl lg:text-3xl mt-8">
              I was introduced to GNU/Linux and open source software in August 2020 and swapped from Windows 10 to Linux full-time in October 2020. I fell in love with open source software and the philosophy behind it. 
            </p>
            <p className="text-off-white text-2xl lg:text-3xl mt-8">
              I started doing freelance website development in 2021 after finding passion and enjoyment of website development. I love to learn new skills and try out new frameworks, and enjoy keeping up to date on the latest website trends.
            </p>
            <p className="font-light text-off-white text-2xl mt-8">
              <a href="#get-a-quote" className="bottom-0 bg-dracula-pink rounded-xl hover:scale-105 text-black p-2 shadow-2xl">Get a quote</a>
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-medium text-dracula-pink text-5xl lg:text-8xl p-8 lg:p-16 text-center">
            My projects
        </h1>
        <div className="project-container lg:w-[90%] lg:grid lg:grid-cols-3 lg:gap-4 m-auto p-4">
          <PortfolioCard title="Rhino Linux" content=" I am the founder and current Desktop Lead of Rhino Linux, the successor distribution to my other project, Rolling Rhino Remix. Rhino Linux is a rolling release Ubuntu-based distribution with Pacstall & XFCE at its core. " image="/assets/rhino-linux.webp" site="https://rhinolinux.org" />

          <PortfolioCard title="Rhino Linux" content=" I am the founder and current Desktop Lead of Rhino Linux, the successor distribution to my other project, Rolling Rhino Remix. Rhino Linux is a rolling release Ubuntu-based distribution with Pacstall & XFCE at its core. " image="/assets/skywm.png" site="https://rhinolinux.org" />

          <PortfolioCard title="Rhino Linux" content=" I am the founder and current Desktop Lead of Rhino Linux, the successor distribution to my other project, Rolling Rhino Remix. Rhino Linux is a rolling release Ubuntu-based distribution with Pacstall & XFCE at its core. " image="/assets/pylure.png" site="https://rhinolinux.org" />
          
        </div>

      <Quote />
      <Footer />
    </main>
  );
}
