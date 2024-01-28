import { type ParamListBase, type RouteProp } from '@react-navigation/native';
import { type NativeStackNavigationProp } from '@react-navigation/native-stack';

import { type Route } from '../enums/Route';

export default interface NativeStackParamList extends ParamListBase {
  [Route.MealsCategories]: undefined;
  [Route.MealsOverview]: { categoryId: string };
}

export type NavigationType<T extends keyof NativeStackParamList> =
  NativeStackNavigationProp<NativeStackParamList, T>;

export type RouteType<T extends keyof NativeStackParamList> = RouteProp<
  NativeStackParamList,
  T
>;
