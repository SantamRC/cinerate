import modifyDate from "../../utils/modifyDate";

export default function Details({ res }) {

  const { release_date } = res.movies;

  return (
    <section className="movie-section details-section">
      <h2>More Details</h2>

      <div className="movie-general-details">
        <hr />
        <div className="release-date">
          <p className="movie-info-para">
            <strong>Release date</strong>
            <span>{modifyDate(release_date)}</span>
          </p>
        </div>
        <hr />
      </div>
    </section>
  );
}
