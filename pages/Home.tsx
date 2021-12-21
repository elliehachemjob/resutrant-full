import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
function Home() {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Welcome to Foody App</Text>
      <Text style={styles.subTitle}>We Offer the best Food Services</Text>
      <View style={styles.cards}>
        <Text>Cards Here </Text>
        <Text>Cards Here </Text>
        <Text>Cards Here </Text>
        <Text>Cards Here </Text>
        <Text>Cards Here </Text>
        <Text>Cards Here </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    postion: 'relative',
    bottom: '33%',
  },
  subTitle: {
    fontSize: 14,
    bottom: '33%',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    margin: 5,
  },
});

export default Home;
