import React from 'react';
import { FlatList, type ListRenderItemInfo } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import type Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { Route } from '../enums/Route';
import { type NavigationType } from '../navigation/NativeStackParamList';

interface ICategoriesScreenProps {
  navigation: NavigationType<Route.MealsCategories>;
}

export default function CategoriesScreen({
  navigation,
}: ICategoriesScreenProps): JSX.Element {
  function renderCategoryItem(
    itemData: ListRenderItemInfo<Category>,
  ): JSX.Element {
    function pressHandler(): void {
      navigation.navigate(Route.MealsOverview, {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
