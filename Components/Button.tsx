import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
function Button() {
  const onPress = () => {
    console.log('pressed');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Press Here</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
});

export default Button;
