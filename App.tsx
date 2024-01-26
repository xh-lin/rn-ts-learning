import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello</Text>
      </View>
      <Text
        style={{ margin: 15, padding: 10, borderWidth: 3, borderColor: 'red' }}
      >
        World!
      </Text>
      <Button title="Tap me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 15,
    padding: 10,
    borderWidth: 3,
    borderColor: 'red',
  },
});
