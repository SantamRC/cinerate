import FetchMovieRatings from "../../services/fetchRatings";
import PersonCard from "./PersonCard";

export default function Details({ res }) {
  const { id } = res.movies;
  const [ratings, setRatings] = FetchMovieRatings(id);

  console.log(ratings);

  return (
    <section className="movie-section details-section ratings">
      <h2>Ratings</h2>
      <div className="ratings-card">
      {ratings.map((item) => (
        <PersonCard rating={item} />
      ))}
      </div>
    </section>
  );
}
