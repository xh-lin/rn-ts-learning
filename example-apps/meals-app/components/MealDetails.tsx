import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IMealDetailsProps {
  duration: string;
  complexity: string;
  affordability: string;
  style?: any;
  textStyle?: any;
}

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: IMealDetailsProps): JSX.Element {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
