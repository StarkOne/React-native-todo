import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {Navbar} from './src/components/Navbar';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState();
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        newTodo
      ]
    });
  }

  const removeTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  let content = <MainScreen 
                  todos={todos}
                  openTodo={setTodoId}
                  removeTodo={removeTodo}
                  addTodoItem={addTodo} />
  if(todoId) {
    const selected = todos.find(todo => todo.id == todoId);
    content = <TodoScreen todo={selected} goBack={() => setTodoId(null)} />
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30
  }
});
