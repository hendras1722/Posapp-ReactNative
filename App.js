import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import { Text } from 'react-native'

import store from './src/components/redux/store';
import HomeScreen from './src/components/screen/Home/HomeScreen';
import ProductScreen from './src/components/screen/Book/ProductScreen';
import BookDetailScreen from './src/components/screen/Book/BookDetail';
import ProfileScreen from './src/components/screen/Profile/ProfileScreen';
import AboutScreen from './src/components/screen/About/AboutScreen';
import ProductAddScreen from './src/components/screen/Book/ProductAdd';
import BookEditScreen from './src/components/screen/Book/BookEdit';
import AboutDetailScreen from './src/components/screen/About/AboutDetailScreen';
import LoginScreen from './src/components/screen/Login/LoginScreen'
import AccountScreen from './src/components/screen/Account/Account'
import OrderScreen from './src/components/screen/Order/Order'

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProductScreen,
    Order: OrderScreen
  }
)

const homeNavigator = createStackNavigator(
  {
    Home: tabNavigator,
    Product: {
      screen: ProductScreen,
      headerStyle: {
        backgroundColor: '#3346A8',
      },
    },
    AddProduct: ProductAddScreen,
    DetailBook: BookDetailScreen,
    EditProduct: BookEditScreen,

    Profile: ProfileScreen,
    Login: LoginScreen,
    Account: AccountScreen
  },
  {
    initialRouteName: 'Login',
  }
)

const AppNavigator = createSwitchNavigator(
  {
    Home: homeNavigator,
    Profile: ProfileScreen
  }
);

const AppContainer = createAppContainer(homeNavigator);

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
      {/* <Text>Hello</Text> */}
    </Provider>
  )
}

export default App;