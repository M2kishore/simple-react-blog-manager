import {useEffect, useState} from 'react';

const useFetch =(url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal})
        .then((response) => {
            if(!response.ok){
                throw Error('could not fetch the data');
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(error => {
            if(error.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
            setIsLoading(false);
            setError(error.message);
            }
        })

        return () => abortController.abort();

    },[url]);

    return { data, isLoading, error}
};

export default useFetch;