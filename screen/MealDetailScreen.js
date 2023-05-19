import { Image, Text, View } from "react-native";

import { MEALS } from '../data/dummy-data'
import MealDetail from "../components/MealDetail";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <View>
            <Image ssource={{ uri: selectMeal.imageUrl }} />
            <Text>{selectMeal.title}</Text>
            <MealDetail
                duration={selectMeal.duration}
                complexity={selectMeal.complexity}
                affordability={selectMeal.affordability}
            />
            <Text>Ingredients</Text>
            {selectMeal.ingredients.map(
                (ingredient) =>
                    <Text key={ingredient}>{ingredient}</Text>
            )}
            <Text>Steps</Text>
            {selectMeal.steps.map(
                (step) =>
                    <Text key={step}>{step}</Text>
            )}
        </View>
    );
}

export default MealDetailScreen;
