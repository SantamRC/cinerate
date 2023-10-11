import { useState } from "react";

export default function useSearch(content) {
    const [query, setQuery] = useState("");
    const [res, setRes] = useState({ status: "", movies: [] });

    const handleQuery = str => setQuery(str);

    const handleSearchForm = async e => {
        e.preventDefault();
        setRes({ status: "" });

        try {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch(`${process.env.REACT_APP_BACKEND_URL}/search/${query}`, requestOptions)
                .then(response => response.json())
                .then(result => setRes({ status: "success", movies: result }))
                .catch(error => setRes({ status: "fail" }));
            setQuery("");
        } catch (error) {
            setRes({ status: "fail" });
        }
    };

    return [query, res, handleQuery, handleSearchForm];
}
