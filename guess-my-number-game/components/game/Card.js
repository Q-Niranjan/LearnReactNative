import { View, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;
const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: 10,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
