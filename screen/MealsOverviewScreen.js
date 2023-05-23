import { useLayoutEffect } from "react";
//can use this as an alternative for get route params
// import { useRoute } from "@react-navigation/native";

import MealsList from "../components/MealsList/MealsList";

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
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === cateId
    ).title;

    //option 2
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cateId, navigation]);

  return <MealsList items={displayMeals} />;
}

export default MealsOverviewScreen;
