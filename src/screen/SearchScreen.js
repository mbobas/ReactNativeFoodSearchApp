import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
        const [term, setTerm] = useState('');
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

        

    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubbmit={() => searchApi(term)}

                />

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }    
            <Text>We have found {results.length} results</Text>

        </View>
    );
};

styles = StyleSheet.create({
    error: {
        color: 'red'
    }
});

export default SearchScreen;