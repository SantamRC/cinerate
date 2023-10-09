// Hooks
import useFetchMovies from "../../services/fetchMovies";

// Components
import Card from "../../components/Card";
import InitialLoader from "../../components/InitialLoader";

export default function PopularMovies() {
  const [res, loadMovies] = useFetchMovies();

  if (res.status !== "success") return <InitialLoader />;

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
