import React from "react";
import CryptoDetective from "../assets/portfolio/CryptoDetective.jpg";

// import navbar from "../assets/portfolio/navbar.jpg";

import TextAnalyzer from "../assets/portfolio/TextAnalyzer.jpg";
import Mypotfolio from "../assets/portfolio/Potfolio.png";
import NewsXpress from "../assets/portfolio/NewsXpress.jpg";
import Web3NobilityPublicFunding from "../assets/portfolio/Web3NobilityPublicFunding.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CryptoDetective,
      name: "CryptoDetective",
      demo: "https://crypto-detective.netlify.app/",
    },
    {
      id: 2,
      src: Web3NobilityPublicFunding,
      name: "Web3NobilityPublicFunding",
      demo: "https://web3-nobility-publicfunding.netlify.app/",
    },
    {
      id: 3,
      src: Mypotfolio,
      name: "Potfolio",
      demo: "https://sparshverma.vercel.app/",
    },
    {
      id: 4,
      src: NewsXpress,
      name: "NewsXpress",
      demo: "https://github.com/sparshrex/NewsXpress",
    },
    {
      id: 5,
      src: TextAnalyzer,
      name: "TextAnalyzer",
      demo: "https://github.com/sparshrex/TextAnalyser",
    },
    {
      id: 6,
      src: "",
      name: "Upcoming ",
      demo: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full lg:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h1 className="mb-2 font-extrabold">{name} </h1>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className=" flex items-center justify-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
