import { useState, useEffect } from "react";
// import axios from "axios";

export default function FetchMovieRatings(movie_id) {
    const [details, setDetails] = useState({ status: "", ratings: [] });

    useEffect(() => {

        const fetchDetails = () => {
            try {
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch(`${process.env.REACT_APP_BACKEND_URL}/ratings/${movie_id}`, requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        setDetails(prev => ({
                            status: "success",
                            ratings: result
                        }));
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                setDetails({ status: "fail", error });
            }
        };

        fetchDetails();
    }, []);

    return [details.ratings, setDetails];
}
