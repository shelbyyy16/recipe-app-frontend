import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyRecipesScreen = () => (
  <View style={styles.container}>
    <Text>My Recipes</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyRecipesScreen;