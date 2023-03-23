import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCustomContext } from "../context/MovieProvider";

const Detail = () => {
  const { id } = useParams();
  const { state } = useCustomContext();
  const [movieDetail, setMovieDetail] = useState({});
  const [releaseDate, setReleaseDate] = useState([]);
  useEffect(() => {
    setMovieDetail(state.originalMovies.find((movie) => movie.id == id));
  }, []);

  useEffect(() => {
    setReleaseDate(movieDetail?.release_date?.split("-"));
  }, [movieDetail]);
  console.log(movieDetail);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <article className="flex bg-white transition my-10 pr-5">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
          <span>{releaseDate?.[0]}</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>
            {monthNames[releaseDate?.[1] - 1]} {releaseDate?.[2]}
          </span>
        </time>
      </div>

      <div className=" flex flex-col md:flex-row">
        <div className="basis-56 md:basis-96">
          <img
            alt="Guitar"
            src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`}
            className=" h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-gray-900 text-3xl">
              {movieDetail?.title}
            </h3>

            <p className="mt-2 text-lg leading-relaxed text-gray-700 line-clamp-3">
              {movieDetail?.overview}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <button className="inline bg-purple-300 border border-purple-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-purple-400">
              Add to favourites
            </button>
            <Link to="/">
              <button className="inline  px-5 py-3 text-center text-xs font-bold uppercase text-purple-900 transition border border-purple-300 hover:bg-purple-100 hover:text-gray-900">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Detail;
