import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IListProps {
  data: string[];
}

export default function List({ data }: IListProps): JSX.Element[] {
  return data.map((dataPoint: string) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
