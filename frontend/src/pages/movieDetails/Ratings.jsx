import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import FetchMovieRatings from "../../services/fetchRatings";
import UpdateRatings from "../../services/updateRatings";
import PersonCard from "./PersonCard";

export default function Ratings({ res }) {
  const [isRating, setRating] = useState(false);
  const [ratingValue, setRatingValue] = useState(5);
  const [userRated, setUserRated] = useState(false);
  const { id } = res.movies;
  const [ratings, setRatings] = FetchMovieRatings(id);
  const [personID, setPersonID] = useState(null);
  const [userName, setUserName] = useState(null);

  console.log(res.movies.id);

  useEffect(() => {
    setPersonID(localStorage.getItem("id"));
    setUserName(localStorage.getItem("name"));
  }, []);

  const handleRating = () => {
    const isLoggedIn = localStorage.getItem("id");
    if (isLoggedIn) setRating(true);
    else alert("Please Sign In");
  };

  const submit = () => {
    UpdateRatings(res.movies.id, personID, ratingValue);
    setRatings();
    setRating(false);
  };

  return (
    <section className="movie-section details-section ratings">
      <h2>Ratings</h2>
      <div className="ratings-card">
        {ratings.map((item) => {
          if (item.person == personID) setUserRated(true);
          return (
            <PersonCard
              key={item.person}
              rating={item}
              personID={item.person}
              userID={personID}
              name={userName}
            />
          );
        })}
      </div>
      {isRating ? (
        <div className="rate-slider">
          <RangeSlider
            min={1}
            max={10}
            step={1}
            defaultValue={[1, 5]}
            thumbsDisabled={[true, false]}
            onInput={(e) => setRatingValue(e[1])}
          />
          <h3 className="rate-value">{ratingValue}</h3>
          <button className="btn btn-primary rate-btn" onClick={() => submit()}>
            Submit
          </button>
        </div>
      ) : (
        <button
          className="btn btn-primary rate-btn"
          onClick={() => handleRating()}
        >
          {userRated ? "Update your Rating" : "Rate this Movie"}
        </button>
      )}
    </section>
  );
}
