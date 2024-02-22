import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleAddRecipe = () => {

    const newRecipe = {
      id: Math.random().toString(), 
      title,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions,
    };


    onAddRecipe(newRecipe);


    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <View>
      <TextInput
        placeholder="Recipe Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChangeText={setIngredients}
        style={styles.input}
      />
      <TextInput
        placeholder="Instructions"
        value={instructions}
        onChangeText={setInstructions}
        multiline
        style={styles.input}
      />
      <Button title="Add Recipe" onPress={handleAddRecipe} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default AddRecipeForm;