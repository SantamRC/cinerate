import { MdHomeFilled, MdTheaters, MdSearch, MdPerson } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsPersonCircle } from "react-icons/bs";
import UseLocalStorage from "../../hooks/useLocalStorage";

export const HomeTab = () => {
  return (
    <>
      <MdHomeFilled />
      <span>Home</span>
    </>
  );
};

export const MoviesTab = () => {
  return (
    <>
      <MdTheaters />
      <span>Movies</span>
    </>
  );
};

export const SearchTab = () => {
  return (
    <>
      <MdSearch />
      <span>Search</span>
    </>
  );
};

export const AboutTab = () => {
  return (
    <>
      <MdPerson />
      <span>About Us</span>
    </>
  );
};

export const GoogleTab = ({ logged }) => {
  if (!logged)
    return (
      <>
        <FcGoogle />
        <span>Google SignIn</span>
      </>
    );
  else
    return (
      <>
        <BsPersonCircle />
        <span>{UseLocalStorage()}</span>
      </>
    );
};
