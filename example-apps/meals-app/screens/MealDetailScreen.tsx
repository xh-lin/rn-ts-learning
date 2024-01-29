import React from 'react';
import { Image, Text, View } from 'react-native';

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
      <Image source={{ uri: selectedMeal?.imageUrl }} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal?.ingredients.map((ingredient: string) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal?.steps.map((step: string) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}
