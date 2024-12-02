import {Pressable, Text, View} from "react-native";
import {StyleSheet} from 'react-native';

function GoalItem(props) {
    return <View style={styles.goalItem}>
        <Pressable android_ripple={{color: '#210644'}}
                   onPress={props.onPress.bind(this, props.id)}
                   style={({pressed}) => pressed && styles.pressStyleIos}>
            <Text style={styles.goalItemText}>{props.text}</Text>
        </Pressable>
    </View>;

}

export default GoalItem;
const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressStyleIos: {
        opacity: 0.5
    },
    goalItemText: {
        color: "white",
        padding: 8,
        fontSize: 18,
    },
});
