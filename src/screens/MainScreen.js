import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';

export const MainScreen = ({todos, addTodoItem, removeTodo, openTodo}) => {
    return (
        <View>
            <AddTodo onSubmit={addTodoItem} />
            <FlatList 
                data={todos}
                renderItem={({item}) => <Todo onOpen={openTodo} onDelete={removeTodo} todo={item} /> }
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})