import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModelVisible, setModelIsVisible] = useState(false);

  function startGoalHandeler() {
    setModelIsVisible(true);
  }
  function endGoalHandeler() {
    setModelIsVisible(false);
  }

  function addGoalHandeler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    endGoalHandeler();
  }

  function deleteGoalItem(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button title="Add Your Goal" onPress={startGoalHandeler} />
        <GoalInput
          visible={isModelVisible}
          endGoalHnadeler={endGoalHandeler}
          onAddGoal={addGoalHandeler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteGoalItem={deleteGoalItem}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={true}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#e9e4e4ff",
  },
  goalContainer: {
    flex: 4,
  },
});
