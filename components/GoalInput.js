import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enterText) {
        setEnteredGoalText(enterText);
    }

    function addGoalHandler() {
        props.goalHandler(enteredGoalText);
        setEnteredGoalText("");
    }

    return <Modal animationType="slide" visible={props.visible}>

        <View style={styles.inputContainer}>
            <Image source={require("../assets/images/goal.png")} style={styles.image}/>
            <TextInput
                style={styles.textInput}
                placeholder="Your Course Goal!"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                multiline={true}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.buttonStyle}>
                    <Button title="Add Goal" onPress={addGoalHandler}/>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title={"Cancel"} onPress={props.cancelHandler} color="#f31282"/>
                </View>
            </View>
        </View>
    </Modal>;
}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#311b6b",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    buttonStyle: {
        width: 100,
        marginHorizontal: 20,
    },
    textInput: {
        width: "100%",
        
        borderWidth: 1,
        padding: 16,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
});
