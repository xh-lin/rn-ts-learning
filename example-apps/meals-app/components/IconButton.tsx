import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

interface IIconButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  onPress: () => void;
}

export default function IconButton({
  icon,
  color,
  onPress,
}: IIconButtonProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
