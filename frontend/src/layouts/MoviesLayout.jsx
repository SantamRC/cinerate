import { Outlet } from "react-router-dom";

export default function MoviesLayout() {
  return (
    <main className="container movies-container">
      <header className="movies-header">
        <h1>Movies</h1>
      </header>
      <Outlet />
    </main>
  );
}
