import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { THEME } from '../theme';

export const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button} >
                    <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button} >
                    <Button color={THEME.DANGER_COLOR} title="Удалить" onPress={() => console.log('remove')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    button: {
        width: '40%'
    }
})