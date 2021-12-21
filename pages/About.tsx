import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function About() {
  return (
    <View style={styles.body}>
      <Text style={styles.fontSize}>About Us</Text>
      <Text style={styles.Parahgraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos
        aliquam eveniet doloribus commodi! Molestiae aliquid totam, voluptatibus
        esse, laboriosam nulla dicta reiciendis quaerat ea, ad molestias
        aliquam. Deserunt maxime ad aperiam! Et placeat atque eum repellat cum,
        dicta eos!
      </Text>
      <Text>(here icon) We offer the follwing things : </Text>
      <Text>(here icon) data</Text>
      <Text>(here icon) data</Text>
      <Text>(here icon) data</Text>
      <Text>(here icon) We also offer the follwing things : </Text>
      <Text>(here icon) data2</Text>
      <Text>(here icon) data2</Text>
      <Text>(here icon) data2</Text>
      <Text style={styles.foodIcon}>(Food Icon) </Text>
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
    fontSize: 18,
  },
  Parahgraph: {
    margin: 50,
  },
  foodIcon: {
    position: 'relative',
    left: '33%',
  },
});

export default About;
