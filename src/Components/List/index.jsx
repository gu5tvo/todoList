import React, { useState } from "react";
import { TodoItem } from "../TodoItem";
import { Box, Heading, ScrollView, VStack } from "native-base";

export function List({ title, favorite }) {
  const initial = [
    {
      label: "nhaa",
      completed: true,
      isFavorite: false,
    },
    {
      label: "nhaa",
      completed: false,
      isFavorite: false,
    },
    {
      label: "nhaacc",
      completed: false,
      isFavorite: true,
    },
  ];

  const [todos, setTodos] = useState(initial);
  const [todoLabel, setTodoLabel] = useState("");

  const handleAddTodo = () => {
    if (todoLabel === "") {
    } else {
      const newTodo = {
        label: todoLabel,
        completed: false,
        isFavorite: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTodoLabel("");
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const filteredTodos = favorite
    ? todos.filter((todo) => todo.isFavorite)
    : todos.filter((todo) => !todo.isFavorite);

  return (
    <VStack px='5'>
      <Heading mb='3'>{title}</Heading>
      <ScrollView>
        <ScrollView>
          {filteredTodos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              handleToggleTodo={handleToggleTodo}
              index={index}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </VStack>
  );
}
