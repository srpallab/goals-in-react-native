import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View, FlatList, Button} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function startAddModalHandler() {
        setIsModalVisible(true);
    }

    function addCancelModalHandler() {
        setIsModalVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setGoals((currentGoals) => [
            ...currentGoals,
            {text: enteredGoalText, id: Math.random().toString()},
        ]);
        addCancelModalHandler();
    }

    function goalDeleteHandler(id) {
        setGoals((currentGoals) => {
            return currentGoals.filter(goal => goal.id !== id)
        });
    }

    return (
        <>
            <StatusBar barStyle="light-content" style="light"/>
            <View style={styles.appContainer}>
                <Button title={"Add New Goal"} color="#5e0acc" onPress={startAddModalHandler}/>
                <GoalInput goalHandler={addGoalHandler} visible={isModalVisible} cancelHandler={addCancelModalHandler}/>
                <View style={styles.goalsContainer}>
                    <FlatList
                        alwaysBounceVertical={false}
                        data={goals}
                        renderItem={(itemData) => {
                            return <GoalItem text={itemData.item.text} id={itemData.item.id}
                                             onPress={goalDeleteHandler}/>;
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    ></FlatList>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
});
