import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const AddRecipeScreen = () => {
  const [recipeName, setRecipeName] = useState('');

  const addRecipe = () => {
    fetch('http://your-backend-url/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: recipeName }),
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