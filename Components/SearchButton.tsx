import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function SearchButton() {
  const [searchQuery, setSearchQuery] = useState('');

  const clickHandler = (e) => {
    // setSearchQuery(e);
  };

  return <TextInput onChangeText={clickHandler} placeholder='text here' />;
}

const styles = StyleSheet.create({});

export default SearchButton;
