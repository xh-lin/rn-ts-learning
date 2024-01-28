import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface ICategoryGridTileProp {
  title: string;
  color: string;
}

export default function CategoryGridTile({
  title,
  color,
}: ICategoryGridTileProp): JSX.Element {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
