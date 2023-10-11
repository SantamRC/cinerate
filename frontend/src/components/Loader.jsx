import Lottie from "lottie-react";

import movieLoader from "../assets/loader.json";

export default function Loader() {
  return (
    <div className="container loader-container">
      {/* <div className="loader"></div> */}
      <Lottie
        animationData={movieLoader}
        loop={true}
        style={{ width: "15rem" }}
      />
    </div>
  );
}
