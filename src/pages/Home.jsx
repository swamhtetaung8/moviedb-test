import React from "react";
import Filter from "../components/Filter";
import Movie from "../components/Movie";
import { useCustomContext } from "../context/MovieProvider";
import { AnimatePresence, motion } from "framer-motion";
const Home = () => {
  const { state } = useCustomContext();
  console.log(state);
  return (
    <>
      <h1 className="mx-20 mt-5 text-5xl font-bold text-purple-400">
        Moviesdb
      </h1>
      <div className=" flex justify-center py-10">
        <Filter />
      </div>
      <motion.div
        layout
        className="grid lg:grid-cols-4 grid-cols-2 gap-y-10 md:gap-y-20 lg:gap-y-32 place-items-center py-5 md:py-10 lg:py-20 px-5">
        {state.filteredMovies.map((movie) => (
          <AnimatePresence key={movie.id}>
            <Movie movie={movie} key={movie.id} />
          </AnimatePresence>
        ))}
      </motion.div>
    </>
  );
};

export default Home;
