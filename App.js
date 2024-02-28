import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View} from "react-native";
import Icon from "react-native-ico-material-design" 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import MyRecipesScreen from "./screens/MyRecipesScreen";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-button'; 
          } else if (route.name === 'Add Recipe') {
            iconName = 'rounded-add-button'; 
          } else if (route.name === 'My Recipes') {
            iconName = 'copy-content';
          } else if (route.name === 'Favorites') {
            iconName = 'favorite-heart-outline-button'; 
          }
        
          return <Icon name={iconName} height={size} width={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [{ display: 'flex' }, null]
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add Recipe" component={AddRecipeScreen} />
      <Tab.Screen name="My Recipes" component={MyRecipesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#3962FF",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   NavContainer: {
//     position: 'absolute',
//     alignItems: 'center',
//     bottom: 20,
//   },

//   NavBar: {
//     flexDirection: 'row',
//     backgroundColor: '#eee',
//     width: '90%',
//     justifyContent: 'space-evenly',  
//     borderRadius: 40
//   },

//   IconBehave: {
//     padding: 14
//   }
// });
