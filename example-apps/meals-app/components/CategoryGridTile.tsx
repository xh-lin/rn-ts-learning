import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ICategoryGridTileProp {
  title: string;
  color: string;
}

export default function CategoryGridTile({
  title,
  color,
}: ICategoryGridTileProp): JSX.Element {
  return (
    <View style={styles.gridItem}>
      <Pressable android_ripple={{ color: '#ccc' }} style={styles.button}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
