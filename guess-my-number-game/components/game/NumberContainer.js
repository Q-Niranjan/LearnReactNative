import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
    borderColor: colors.acentYellow500,
    borderWidth: 4,
    margin: 24,
    padding: 24,
  },
  numText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.acentYellow500,
  },
});
