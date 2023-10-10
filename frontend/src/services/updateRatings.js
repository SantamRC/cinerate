export default function UpdateRatings(movie_id, person_id, rate) {
    return new Promise((resolve, reject) => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URL}/ratings/${movie_id}/${person_id}/${rate}`, requestOptions)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject('error', error));
    })
}
