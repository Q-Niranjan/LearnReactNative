import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputhandeler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function onAddGoalHandeler() {
    if (enteredGoalText.trim().length == 0) {
      Alert.alert("Empty Goal", "You cannot submit an empty goal!");
      return;
    }

    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.jpg")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputhandeler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddGoalHandeler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.endGoalHnadeler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "coulumn",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#e9e4e4ff",
  },
  image: {
    width: 400,
    height: 300,
    margin: 20,
    borderRadius: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    margin: 16,
    color: "black",
    fontWeight: 600,
    borderRadius: 5,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    padding: 8,
  },
});
