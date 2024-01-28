import React from 'react';
import { FlatList, type ListRenderItemInfo } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import type Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen(): JSX.Element {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

function renderCategoryItem(
  itemData: ListRenderItemInfo<Category>,
): JSX.Element {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}
