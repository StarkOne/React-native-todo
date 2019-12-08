import React,{ useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState(''); 

    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value.trim());
            setValue('');
        } else {
            Alert.alert('Название дела не может быть пустым!')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                onChangeText={setValue} 
                value={value}
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Ведите название дела..."
                style={styles.input} />
            <Button onPress={pressHandler} title="Добавить" />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
       width: '70%',
       padding: 10,
       borderStyle: 'solid',
       borderBottomWidth: 2,
       borderBottomColor: '#3949ab'
    },
})
