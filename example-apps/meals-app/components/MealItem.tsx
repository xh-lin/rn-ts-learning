import React from 'react';
import { Text, View } from 'react-native';

interface IMealItemProps {
  title: string;
}

export default function MealItem({ title }: IMealItemProps): JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
