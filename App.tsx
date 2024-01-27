import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

interface IGoal {
  id: string;
  text: string;
}

export default function App(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

  function startAddGoalHandler(): void {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText: string): void {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }

  function deleteGoalHandler(id: string): void {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {<GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={() => {
                  deleteGoalHandler(itemData.item.id);
                }}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
