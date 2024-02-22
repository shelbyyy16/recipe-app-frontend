import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddRecipeForm from '../components/AddRecipeForm';
import recipesData from '../data/recipesData'; 

const AddRecipeScreen = ({ navigation }) => {
  const handleAddRecipe = (newRecipe) => {
    
    recipesData.push(newRecipe);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AddRecipeScreen;