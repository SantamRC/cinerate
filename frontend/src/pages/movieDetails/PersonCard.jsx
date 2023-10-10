import { BsPersonBoundingBox } from "react-icons/bs";
import { MdStar } from "react-icons/md";

export default function PersonCard({ rating }) {
  console.log(rating);

  return (
    <section className="person-card">
      <BsPersonBoundingBox className="bs-icon" />
      <h5>Anonymouse_Person_{rating.person}</h5>
      <h3 className="movie-rating">
        <MdStar />
        <span>{rating.rating}</span>
      </h3>
    </section>
  );
}
