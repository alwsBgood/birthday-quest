import {useEffect, useState} from "react";

export default function useError() {
    const [error, setErrorState] = useState(false);

    useEffect(() => {
        setTimeout(() => setErrorState(false), 500);

    }, [error])

    const setError  = () => setErrorState(true);

    return [error, setError]
}
