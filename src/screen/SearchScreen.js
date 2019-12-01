import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    //console.log(props);
        const [term, setTerm] = useState('');
        const [searchApi, results, errorMessage] = useResults();
        
        const filterResultsByPrice = (price) => {
            // price === '$' || '$$' || '$$$'
            return results.filter(result => {
                return result.price === price;
            });
        }; 

    return(
        //empty tags - instead <View> tag - better flex on screen 
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubbmit={() => searchApi(term)}

                />

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null }    
            
            <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective" 
                navigation={navigation}
                />
                
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricier"
                navigation={navigation}
                />
                
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender"
                navigation={navigation}
                 />
                
            </ScrollView>
        </>
    );
};

styles = StyleSheet.create({
    error: {
        color: 'red'
    },
    container: {
        flex: 1,
    }
});

export default SearchScreen;