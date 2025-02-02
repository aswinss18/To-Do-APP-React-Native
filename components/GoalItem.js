import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ itemData, onDeleteItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={onDeleteItem.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>{" "}
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    margin: 8,
    color: "white",
  },
  pressedItem: { opacity: 0.5 },
  goalText: {
    color: "white",
    padding: 8,
  },
});
