import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

/* Layouts */
import RootLayout from "../layouts/RootLayout";
import MoviesLayout from "../layouts/MoviesLayout";
import SearchLayout from "../layouts/SearchLayout";

// /* Pages */
import Home from "./home/Home";
// import Movies from "./movies/Movies";
import PopularMovies from "./movies/PopularMovies";
import MovieDetails from "./movieDetails/MovieDetails";
// import MoviesSearch from "./search/MoviesSearch";
// import AboutUs from "./AboutUs";
// import ContactUs from "./ContactUs";
import NotFound from "./NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="movies" element={<MoviesLayout />}>
        <Route index element={<PopularMovies />} />
        {/* <Route
          path=":type"
          element={<Movies />}
          errorElement={<h1>Not Available</h1>}
        /> */}
      </Route>

      <Route path="movie/:id" element={<MovieDetails />} />

      {/* <Route path="search" element={<SearchLayout />}>
        <Route index element={<MoviesSearch />} />
        <Route path="movies" element={<MoviesSearch />} />
      </Route>

      <Route path="about" element={<AboutUs />} /> */}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Router() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<h1>Something went wrong</h1>}
    ></RouterProvider>
  );
}
