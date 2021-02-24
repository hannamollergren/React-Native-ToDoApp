import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import AddToDo from './components/addToDo';
import Header from "./components/header";
import ToDoItem from "./components/toDoItem";

export default function App() {
	const [todos, setTodos] = useState([
		{ text: 'buy coffee', key: '1' },
		{ text: 'create an app', key: '2' },
		{ text: 'play on the switch', key: '3' }
	]);

	const pressHandler = (key) => {
		setTodos((prevToDos) => {
			return prevToDos.filter(todo => todo.key != key)
		})
	}

	const submitHandler = (text) => {
		setTodos((prevToDos) => {
			return [
				{text: text, key: Math.random().toString()},
				...prevToDos
			]
		})
	}



	return (
		<View style={styles.container}>
			<Header/>
			<View style={styles.content}>
				<AddToDo submitHandler={submitHandler}/>
				<View style={styles.list}>
					<FlatList 
						data={todos}
						renderItem={({item}) => (
							<ToDoItem item={item} pressHandler={pressHandler}/>
						)}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
	  flex: 1,
	  backgroundColor: "#fff",
  },
  content: {
	padding: 40,

  }, 
  list: {
	marginTop: 20
  }
});
