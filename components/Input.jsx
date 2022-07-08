import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  Icon,
}) {
  return (
    <View style={styles.container}>
      {Icon}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#D9D9D9',
  },
  input: {
    marginLeft: 16,
  },
});
