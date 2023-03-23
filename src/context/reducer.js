export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { originalMovies: action.payload, filteredMovies: action.payload };

    case "COMEDY":
      return {
        ...state,
        filteredMovies: state.originalMovies.filter((movie) =>
          movie.genre_ids.includes(35)
        ),
      };
    case "ACTION":
      return {
        ...state,
        filteredMovies: state.originalMovies.filter((movie) =>
          movie.genre_ids.includes(28)
        ),
      };
    case "ANIMATION":
      return {
        ...state,
        filteredMovies: state.originalMovies.filter((movie) =>
          movie.genre_ids.includes(16)
        ),
      };
    case "FANTASY":
      return {
        ...state,
        filteredMovies: state.originalMovies.filter((movie) =>
          movie.genre_ids.includes(14)
        ),
      };
    case "HORROR":
      return {
        ...state,
        filteredMovies: state.originalMovies.filter((movie) =>
          movie.genre_ids.includes(27)
        ),
      };
    case "ALL":
      return {
        ...state,
        filteredMovies: state.originalMovies,
      };
  }
};
