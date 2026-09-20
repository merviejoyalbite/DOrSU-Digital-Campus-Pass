import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DOrSU Digital Campus Pass</Text>

      <Image
        source={require('./assets/icon.png')}
        style={styles.image}
      />

      <Text style={styles.description}>
        Student Verification System
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => alert('Campus Pass Verified!')}
      >
        <Text style={styles.buttonText}>Verify Campus Pass</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },

  image: {
    width: 120,
    height: 120,
    marginVertical: 20,
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
  },

  button: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#00758F',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});