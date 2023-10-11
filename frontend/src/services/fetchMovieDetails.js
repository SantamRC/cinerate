import { useState, useEffect } from "react";

export default function FetchMovieDetails(movie_id) {
    const [details, setDetails] = useState({ status: "", details: {} });

    useEffect(() => {

        const fetchDetails = () => {
            try {
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch(`${process.env.REACT_APP_BACKEND_URL}/moviedetails/${movie_id}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        setDetails(prev => ({
                            status: "success",
                            movies: result
                        }));
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                setDetails({ status: "fail", error });
            }
        };

        fetchDetails();
    }, []);

    return [details, setDetails];
}
