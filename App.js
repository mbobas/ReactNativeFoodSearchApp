import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SerachScreen from './src/screen/SearchScreen';

const navigator = createStackNavigator({
    Search: SerachScreen,
}, 
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
});

export default createAppContainer(navigator);