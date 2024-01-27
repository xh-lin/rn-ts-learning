import React from 'react';
import GoalsApp from './example-apps/goals-app/GoalsApp';
import MealsApp from './example-apps/meals-app/MealsApp';
import { Text, View } from 'react-native';

export default function App(): JSX.Element {
  const app: number = 2;

  function renderContent(): JSX.Element {
    switch (app) {
      case 1:
        return <GoalsApp />;
      case 2:
        return <MealsApp />;
      default:
        return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Select a different `app` value to switch example apps</Text>
          </View>
        );
    }
  }

  return renderContent();
}
