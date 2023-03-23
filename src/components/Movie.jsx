import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCustomContext } from "../context/MovieProvider";
const Movie = ({ movie }) => {
  const { dispatch } = useCustomContext();
  return (
    <motion.div
      animate={{ transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      layout
      className="md:w-[300px] w-[160px] rounded-md shadow-md bg-gray-900 text-gray-100">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-auto bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide truncate">
            {movie.title}
          </h2>
          <p className="text-gray-100">{movie.release_date}</p>
        </div>
        <Link
          to={`/${movie.id}`}
          className="flex items-center justify-center w-full md:p-3 p-1 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">
          Details
        </Link>
      </div>
    </motion.div>
  );
};

export default Movie;
