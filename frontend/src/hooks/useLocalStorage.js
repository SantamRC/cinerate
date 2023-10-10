import { useState, useEffect } from "react";

export default function UseLocalStorage() {
    const [id, setId] = useState(null)

    useEffect(() => {
        const localID = localStorage.getItem('name');
        setId(localID)
    }, [])


    return id;
}