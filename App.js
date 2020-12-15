import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



import Product from './App/Screen/Product';


const HomeStack = createStackNavigator(
  {
    Product
  },
  {
    initialRouteName: "Product",
    headerMode: "none"
  }
)

const SwitchStack = createSwitchNavigator(
  {
    HomeStack
  },
  {
    initialRouteName: "HomeStack"
  }
)

const AppContainer = createAppContainer(SwitchStack)


export default AppContainer;