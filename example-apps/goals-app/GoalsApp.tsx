import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface IGoal {
  id: string;
  text: string;
}

export default function GoalsApp(): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

  function startAddGoalHandler(): void {
    setModalIsVisible(true);
  }

  function endAddGoalHandler(): void {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string): void {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id: string): void {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#b180f0"
          onPress={startAddGoalHandler}
        />
        {
          <GoalInput
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
        }
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5,
  },
});
