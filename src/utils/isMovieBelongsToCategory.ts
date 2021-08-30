import {IGenre, IMovie} from "../types";

// a category name should match a genre name
export const isMovieBelongsToCategory =
  (genres: IGenre[]) =>
  (movie: IMovie, categoryName: string): boolean => {
    if (categoryName === "All") {
      return true;
    }

    return (
      genres
        .filter((gen) => movie.genre_ids.includes(gen.id))
        .filter((movie) => movie.name === categoryName).length > 0
    );
  };
