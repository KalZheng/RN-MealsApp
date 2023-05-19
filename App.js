import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          //this allow to set default styling for all screen
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          // to get the title for the screen dynamically 
          // option 1 
          // the {route, navigation} is provided react navigation 
          // when pass function to the options param
          // you then can extract the category id from route just as MealsOverviewScreen
          // options={({ route, navigation }) => {
          //   const title = route.params.title;
          //   return {
          //     title: title,
          //   };
          // }}
          // option 2 is to fetch the title in the screen 
          // that you are going to 
          // which in this case is the MealsOverviewScreen
          // so check there for option 2 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
