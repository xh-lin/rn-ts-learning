import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingBottom: 50,
  },
});
