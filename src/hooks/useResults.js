import {useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
        const searchApi = async (searchTerm) => {
            console.log('testsearching test');
            try {
            const response = await yelp.get('/search', {
                params: {
                   limit: 50,
                   term: searchTerm,
                   location: 'san jose',

                }
            });
            setResults(response.data.businesses);
            }catch (err) {
                setErrorMessage('Something went wrong');
            }
        };
        //call searchAPI hwen component is first rendered. BAD CODE!!!!!
        // searchApi('pasta); - is maaked a loop here....start agian..start agiain....

        //RIGHT WAY TO SEARCH 1 time on start app
        useEffect(()=> {
            searchApi('pasta');         
        }, []);

        return [searchApi, results, errorMessage];   // we must return function which will be used in searchScreen
};