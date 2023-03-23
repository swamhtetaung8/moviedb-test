import React from "react";
import { useCustomContext } from "../context/MovieProvider";

const Filter = () => {
  const { dispatch } = useCustomContext();
  return (
    <span className="inline-flex flex-wrap justify-center -space-x-px overflow-hidden rounded-md border bg-white shadow-sm mx-5 md:mx-0">
      <button
        className="inline-block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        onClick={() => dispatch({ type: "ALL" })}>
        All
      </button>

      <button
        className="inline-block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        onClick={() => dispatch({ type: "COMEDY" })}>
        Comedy
      </button>

      <button
        className="inline-block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        onClick={() => dispatch({ type: "ACTION" })}>
        Action
      </button>
      <button
        className="inline-block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        onClick={() => dispatch({ type: "ANIMATION" })}>
        Animation
      </button>
      <button
        className="inline-block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        onClick={() => dispatch({ type: "FANTASY" })}>
        Fantasy
      </button>
      <button
        className="inline-block px-4 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:relative"
        onClick={() => dispatch({ type: "HORROR" })}>
        Horror
      </button>
    </span>
  );
};

export default Filter;
