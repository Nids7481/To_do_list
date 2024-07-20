import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

const Task=(props) =>{
    return(
        <View style = {styles.item}>
            <View style= {styles.itemLeft}>
                <View style={[styles.square, props.completed && styles.squareCompleted]}></View>
                <Text style={[styles.itemText, props.completed && styles.itemTextCompleted]}>
                    {props.text}
                </Text>
            </View>
            <View style={[styles.circular, props.completed && styles.circularCompleted]}>
                {props.completed && <Text style={styles.checkmark}>✓</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FCF2F0',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#F8C3B9',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    squareCompleted: {
        backgroundColor: '#121212',
        opacity: 0.8,
    },
    itemText:{
        maxWidth: '80%',
        fontWeight: 'bold',
    },
    itemTextCompleted: {
        textDecorationLine: 'line-through',
        color: '#A9A9A9',
    },
    circular:{
        width: 15,
        height: 15,
        borderColor: '#F8C3B9',
        borderWidth: 2,
        borderRadius: 5,
    },
    circularCompleted: {
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        color: '#FFF',
        fontSize: 5,
        textAlign: 'center',
    },
});
export default Task;
