import { lazy, Suspense, useEffect, useState } from "react";

// Custom Hooks
// import useMeta from "../../hooks/useMeta";
// import useFetch from "../../hooks/useFetch";

import Loader from "../../components/Loader";
// import InitialLoader from "../../components/InitialLoader";
import MoviesCarousel from "./MoviesCarousel";

import topmovies from "../../services/topmovies";

const Movies = lazy(() => import("./Movies"));
// const Shows = lazy(() => import("./Shows"));

export default function Home() {
  // useMeta({
  //   title: "Home | Movieplex",
  //   description:
  //     "Discover a world of movies and TV shows with our movie app powered by the TMDB API. Explore popular and top-rated movies and TV shows, search for your favorites, and delve into detailed information and reviews. Enjoy endless entertainment at your fingertips"
  // });
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
