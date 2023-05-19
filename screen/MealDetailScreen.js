import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import { MEALS } from '../data/dummy-data'
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;

    const selectMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: selectMeal.imageUrl }}
                />
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
            </View >
        </ScrollView>
    );
}

export default MealDetailScreen;


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailTextStyle: {
        color: 'white'
    },
    listOutterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});