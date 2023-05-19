import { Text, View } from "react-native";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;
    return (
        <View><Text>This is the meal detail screen - {mealId}</Text></View>
    );
}

export default MealDetailScreen;