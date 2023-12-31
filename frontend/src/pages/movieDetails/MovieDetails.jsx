import { useParams } from "react-router-dom";

// Custom Hooks
import fetchMovieDetails from "../../services/fetchMovieDetails";

// Page Components
import MoviePoster from "./MoviePoster";
import Details from "./Details";
import Ratings from "./Ratings";

// Other Components
import Loader from "../../components/Loader";
import InitialLoader from "../../components/InitialLoader";

export default function MovieDetails() {
  const { id: movie_id } = useParams();
  const [details, setDetails] = fetchMovieDetails(movie_id);

  if (details.status !== "success") return <InitialLoader />;

  return (
    <main className="container movie-details-container">
      <MoviePoster movie={details.movies} />
      <Details res={details} />
      <Ratings res={details} />
    </main>
  );
}
