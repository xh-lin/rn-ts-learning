import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IGoalItemProps {
  text: string;
}

export default function GoalItem(props: IGoalItemProps): JSX.Element {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
});
