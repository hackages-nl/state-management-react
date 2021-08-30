import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { MovieList } from "./components/MovieList";
import { fetchCategories, fetchMovies } from "./api";
import { ICategory, IMovie } from "./types";

export function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchMovies().then(data => setMovies(data));
    fetchCategories().then(data => setCategories(data));
  }, []);

  function filterMovies(catory: string): IMovie[] {
    throw new Error('not implemented')
  }


  return (
    <div data-testid="app-main">
      <Header filterMovies={filterMovies} />
      <section className="wrapper">
        <Categories categories={categories} />
        <MovieList
          movies={movies}
        />
      </section>
      <Footer />
    </div>
  );
}
