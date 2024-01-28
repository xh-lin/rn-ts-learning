import React from 'react';
import {
  FlatList,
  type ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';
import { type Route } from '../enums/Route';
import type Meal from '../models/meal';
import { type RouteType } from '../navigation/NativeStackParamList';

interface IMealsOverviewScreenProps {
  route: RouteType<Route.MealsOverview>;
}

export default function MealsOverviewScreen({
  route,
}: IMealsOverviewScreenProps): JSX.Element {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  function renderMealItem(itemData: ListRenderItemInfo<Meal>): JSX.Element {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
