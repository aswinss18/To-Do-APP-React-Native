import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({
  addGoalHandler,
  goalInputHandler,
  enteredGoalText,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        placeholder="Your course goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
