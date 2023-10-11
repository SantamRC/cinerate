import { lazy, useEffect, useState } from "react";

import Loader from "../../components/Loader";

import MoviesCarousel from "./MoviesCarousel";

import topmovies from "../../services/topmovies";

const Movies = lazy(() => import("./Movies"));

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    topmovies().then((res) => setMovies(res));
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="container home-container">
      <section className="carousel-wrapper">
        <MoviesCarousel movies={movies} />
      </section>

      <section className="movies-shows-wrapper">
        <Movies movies={movies} title={"Popular Movies"} type={"popular"} />
      </section>
    </main>
  );
}
