import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SerachScreen from './src/screen/SearchScreen';
import ResultShowScreen from './src/screen/ResultShowScreen';

const navigator = createStackNavigator({
    Search: SerachScreen,
    ResultShow: ResultShowScreen,
}, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
});

export default createAppContainer(navigator);