import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const AddRecipeScreen = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [recipeInstructions, setRecipeInstructions] = useState('');

  const addRecipe = () => {
    fetch('https://frozen-castle-13535-f4816b79f6af.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: recipeName,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipe added:', data);
      })
      .catch((error) => {
        console.error('Error adding recipe:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Add Recipe</Text>
      <TextInput
        placeholder="Recipe Name"
        value={recipeName}
        onChangeText={(text) => setRecipeName(text)}
      />
      <TextInput
        placeholder="Ingredients"
        value={recipeIngredients}
        onChangeText={(text) => setRecipeIngredients(text)}
      />
      <TextInput
        placeholder="Instructions"
        value={recipeInstructions}
        onChangeText={(text) => setRecipeInstructions(text)}
      />
      <Button title="Add Recipe" onPress={addRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddRecipeScreen;