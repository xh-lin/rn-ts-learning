import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IGoalItemProps {
  text: string;
  onDeleteItem: () => void;
}

export default function GoalItem(props: IGoalItemProps): JSX.Element {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
