import { useState, useEffect } from "react";

// Hooks
import useFetchMovies from "../../services/fetchMovies";

// Components
import Card from "../../components/Card";
import InitialLoader from "../../components/InitialLoader";

export default function PopularMovies() {
  const [loading, setLoading] = useState(true);
  const [res, loadMovies] = useFetchMovies();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <InitialLoader />;

  return (
    <>
      <section className="cards">
        {res.movies.map((movie) => (
          <Card data={movie} key={movie.id} />
        ))}
      </section>
      <section className="load-more-container">
        <button className="btn btn-primary" onClick={loadMovies}>
          Load more
        </button>
      </section>
    </>
  );
}
