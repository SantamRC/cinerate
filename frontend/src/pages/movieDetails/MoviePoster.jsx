import { MdStar } from "react-icons/md";

// Custom Hooks
import use3dAnimation from "../../hooks/use3dAnimation";

export default function MoviePoster({ movie }) {
  const { animateCard, removeAnimation } = use3dAnimation();

  return (
    <section
      className="movie-poster-section"
      style={{
        backgroundImage: `linear-gradient(to top, oklch(2% .05 200 / .8), oklch(10% 0.05 200 / .5)), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="movie-image-container">
        <img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          srcSet={`https://image.tmdb.org/t/p/w300${movie.poster_path} 300w, https://image.tmdb.org/t/p/w400${movie.poster_path} 400w, https://image.tmdb.org/t/p/w500${movie.poster_path} 500w`}
          alt={movie.title}
          loading="lazy"
          decoding="async"
          width="380"
          height="550"
          onMouseMove={animateCard}
          onMouseOut={removeAnimation}
        />
      </div>

      <div className="movie-content">
        <h1 className="movie-title">{movie.title}</h1>

        <div className="movie-rating">
          <MdStar />
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>


        <p className="movie-description">{movie.overview}</p>

      </div>
    </section>
  );
}
