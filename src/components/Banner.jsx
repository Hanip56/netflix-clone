import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";

const Banner = ({ netflixOriginals }) => {
  let movie = {};

  if (netflixOriginals) {
    movie =
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)];
  }

  console.log(movie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:space-y-7 lg:h-[85vh] lg:justify-end">
      <div className="absolute top-0 left-0 h-[95vh] -z-10">
        <img
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="hero"
          className="h-full w-screen object-cover object-center"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_title}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>

      <div className="flex gap-x-2">
        <button className="buttonBanner bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:w-7 md:h-7" /> Play
        </button>
        <button className="buttonBanner bg-[gray]/70">
          More Info <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
