import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ itemData, onDeleteItem }) {
  return (
    <Pressable onPress={onDeleteItem.bind(this, itemData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
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
