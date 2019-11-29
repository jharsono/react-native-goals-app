import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  },
  addSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  goalListItem: {
    width: '80%',
    margin: 30,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 2,
    height: 20,
  }
});

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals, {
      key: Math.random().toString(),
      value: enteredGoal,
    }
    ]);
    // Clear the field after adding:

    // setEnteredGoal('');
  };

  const renderGoalItem = (itemData) => (
    <View
      style={styles.goalListItem}
    >
      <Text>
        {itemData.item.value}
      </Text>
    </View>
  );

  return (
    <View style={{padding: 50}}>
      <View style={styles.addSection}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
      />
        <Button
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <View>

        {/* FlatList takes a data prop which is expected to be an array of objects for "data" prop.
            renderItem func will be passed the itemData (each index of data array).
            you will need to define a key to get passed into each iterated item
            It is more performant than ScrollView when listing an unknown amount of items.
         */}
        <FlatList
          data={courseGoals}
          renderItem={renderGoalItem}
        />
      </View>
    </View>
  );
}
