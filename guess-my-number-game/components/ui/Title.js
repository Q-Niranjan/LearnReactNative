import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 16,
    color: "white",
    borderWidth: 2,
    margin: 16,
    borderColor: "white",
  },
});
