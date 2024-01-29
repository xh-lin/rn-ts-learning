import React, { useLayoutEffect } from 'react';
import {
  FlatList,
  type ListRenderItemInfo,
  StyleSheet,
  View,
} from 'react-native';

import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { type Route } from '../enums/Route';
import type Meal from '../models/meal';
import {
  type NavigationType,
  type RouteType,
} from '../navigation/NativeStackParamList';

interface IMealsOverviewScreenProps {
  route: RouteType<Route.MealsOverview>;
  navigation: NavigationType<Route.MealsOverview>;
}

export default function MealsOverviewScreen({
  route,
  navigation,
}: IMealsOverviewScreenProps): JSX.Element {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => category.id === catId);

    navigation.setOptions({ title: category?.title });
  }, [catId, navigation]);

  function renderMealItem(itemData: ListRenderItemInfo<Meal>): JSX.Element {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
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
