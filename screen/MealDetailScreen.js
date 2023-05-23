// import { useContext, useLayoutEffect } from "react";
import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealCtx = useContext(FavoritesContext);

  //for redux
  // the state param is from redux,
  // and in state access the reducer with name in store.js (favoriteMeal)
  // and in favoriteMeal has state from favorite.js (ids)
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;

  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite = favoriteMealCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoriteMealCtx.removeFavorite(mealId);
      //here you pass id because in the favorite you ask for payload.id (line 13 in favorite)
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealCtx.addFavorite(mealId);
      // just like remove (line 10 in favorite)
      dispatch(addFavorite({ id: mealId }));
    }
  }

  //add header button option 2
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        // return <Button title="Tap me" onPress={headerButtonPressHandler} />
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
        <Text style={styles.title}>{selectMeal.title}</Text>
        <MealDetail
          duration={selectMeal.duration}
          complexity={selectMeal.complexity}
          affordability={selectMeal.affordability}
          textStyle={styles.detailTextStyle}
        />
        <View style={styles.listOutterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailTextStyle: {
    color: "white",
  },
  listOutterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
