import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { type Route } from '../enums/Route';
import { type RouteType } from '../navigation/NativeStackParamList';

interface IMealDetailScreenProps {
  route: RouteType<Route.MealDetail>;
}

export default function MealDetailScreen({
  route,
}: IMealDetailScreenProps): JSX.Element {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal?.steps.map((step: string) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
