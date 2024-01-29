import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface ISubtitleProps {
  children: string;
}

export default function Subtitle({ children }: ISubtitleProps): JSX.Element {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
