import React from 'react';

function PortfolioCard({ title, content, image, site }) {
    return (
      <div className="border-solid border-aj-border border-2 p-4 rounded-[0.65em] hover:border-dracula-pink hover:shadow-dracula-pink hover:shadow-bxs transition-all mb-4 md:hover:scale-105 shadow-2xl">
        <img src={image} alt={title} className="w-full h-auto" />
        <h1 className="card-title font-medium text-center mt-4 text-dracula-pink text-5xl lg:text-8xl">{title}</h1>
        <p className="card-content font-light text-off-white text-2xl lg:text-3xl mt-4">{content}</p>
        <p className="font-light text-off-white text-2xl mt-8">
          <a href={site} target="_blank" className="bottom-0 bg-dracula-pink rounded-xl text-black p-2 shadow-2xl">Get a quote</a>
        </p>
      </div>
    );
  }

export default PortfolioCard;