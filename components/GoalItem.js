import { StyleSheet, Text, View } from "react-native";

export default function GoalItem({ itemData }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    margin: 8,
    padding: 8,
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
