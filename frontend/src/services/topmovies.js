function topmovies() {
    return new Promise((resolve, reject) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URL}/topmovies`, requestOptions)
            .then(res => res.json())
            .then(result => {
                resolve(result)
            })
            .catch(error => {
                console.log(error)
                reject('error', error)
            });
    })
}

export default topmovies;