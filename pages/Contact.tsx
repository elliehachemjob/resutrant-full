import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Contact() {
  return (
    <View style={styles.body}>
      <View style={styles.subBody}>
        <Text style={styles.touch}>Get In Touch</Text>
      </View>
      <View style={styles.subBody}>
        <Text style={styles.text}>Search Address Icon</Text>
      </View>
      <View style={styles.subBody}>
        <Text style={styles.address}>Address</Text>
      </View>
      <View style={styles.subBody}>
        <Text style={styles.text}>Lebanon office</Text>
        <Text style={styles.subText}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <View style={styles.subBody}>
        <Text style={styles.text}>United Kingdom office</Text>
        <Text style={styles.subText}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <View style={styles.subBody}>
        <Text style={styles.text}>Austrlia office</Text>
        <Text style={styles.subText}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <View style={styles.subBody}>
        <Text style={styles.text}>United States office</Text>
        <Text style={styles.subText}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <View>
        <Text style={styles.envelopIcon}>Envelop Icon</Text>
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
  touch: {
    fontSize: 22,
  },
  address: {
    fontSize: 20,
  },
  subBody: {
    margin: 15,
  },
  text: {
    fontSize: 18,
  },
  subText: {
    fontSize: 16,
  },
  envelopIcon: {
    position: 'relative',
    left: '33%',
  },
});

export default Contact;
