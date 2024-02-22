import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateScreen = () => (
  <View style={styles.container}>
    <Text>Add Recipe</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateScreen;