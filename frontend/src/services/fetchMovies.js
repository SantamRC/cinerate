import { useState, useEffect } from "react";

export default function useFetchMovies(type = "popular") {
  const [page, setPage] = useState(1);
  const [res, setRes] = useState({ status: "", movies: [] });
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    const fetchMovies = () => {
      try {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URL}/movies/${page}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            setRes(prev => {
              console.log(prev)
              return {
                status: "success",
                movies: [...prev.movies, ...result]
              }
            });
          })
          .catch(error => console.log('error', error));



      } catch (error) {
        setRes({ status: "fail", error });
      }
    };

    fetchMovies();
  }, [page, type, initialRender]);

  const loadMovies = () => setPage(prevPage => prevPage + 1);

  return [res, loadMovies, setRes, setPage];
}
