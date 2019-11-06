import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../screen/SearchBar';


const SearchScreen = () => {
        const [term, setTerm] = useState('');
    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubbmit={() => console.log('term was submitted')}

                />

                
            <Text>{term}</Text>
        </View>
    );
};

styles = StyleSheet.create({

});

export default SearchScreen;