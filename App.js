import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }
  function startAddGoalHandler() {
    setIsModalVisible(true);
  }
  function endAddGoalHandler() {
    setIsModalVisible(false);
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          visible={isModalVisible}
          enteredGoalText={enteredGoalText}
          addGoalHandler={addGoalHandler}
          endAddGoalHandler={endAddGoalHandler}
          goalInputHandler={goalInputHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            keyExtractor={(item, index) => {
              return item.id;
            }}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: { flex: 5 },
});
