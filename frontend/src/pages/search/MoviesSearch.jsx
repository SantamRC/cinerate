// Custom Hooks
import useSearch from "../../services/useSearch";

// Components
import SearchForm from "./SearchForm";
import Cards from "./Cards";

export default function MoviesSearch() {
  const [query, res, handleQuery, handleSearchForm] = useSearch("movie");

  return (
    <section className="search-section">
      <div className="search-form-container">
        <SearchForm
          type="movie"
          query={query}
          handleQuery={handleQuery}
          handleSearchForm={handleSearchForm}
        />
      </div>

      {res.status === "fail" || !res.status ? (
        ""
      ) : (
        <div className="cards">
          <Cards data={res.movies} />
        </div>
      )}
    </section>
  );
}
