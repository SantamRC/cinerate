import { lazy, Suspense, useEffect, useState } from "react";

import Loader from "../../components/Loader";

import MoviesCarousel from "./MoviesCarousel";

import topmovies from "../../services/topmovies";

const Movies = lazy(() => import("./Movies"));
// const Shows = lazy(() => import("./Shows"));

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    topmovies().then((res) => setMovies(res));
  }, []);

  // if (res.status !== "success") return <InitialLoader />;

  return (
    <main className="container home-container">
      <section className="carousel-wrapper">
        <MoviesCarousel movies={movies} />
      </section>

      <section className="movies-shows-wrapper">
        <Suspense fallback={<Loader />}>
          <Movies
            movies={movies}
            title={"Popular Movies"}
            type={"popular"}
          />
        </Suspense>
      </section>
    </main>
  );
}
