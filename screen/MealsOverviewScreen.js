import { useLayoutEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
//can use this as an alternative for get route params
// import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data";

// option 2
// screen component register in the 
// navigation stack also has the 'navigation' props
function MealsOverviewScreen({ route, navigation }) {
  const cateId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cateId) >= 0;
  });

  // useLayoutEffect use the style of the layout 
  useLayoutEffect(() => {
    // this will cause a warning if not in useEffect or useLayoutEffect
    const categoryTitle = CATEGORIES.find((category) => category.id === cateId).title;

    //option 2 
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cateId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <MealItem {...mealItemProps} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
