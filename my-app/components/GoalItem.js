import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.deleteGoalItem.bind(this, props.id)}
        style={({ pressed }) => [pressed && styles.pressedItem]}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
    textAlign: "center",
  },
  pressedItem: {
    backgroundColor: "#1f0442ff",
    opacity: 0.5,
  },
});
