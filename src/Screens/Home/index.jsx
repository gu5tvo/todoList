import {
  StatusBar,
  Box,
  Center,
  Fab,
  HStack,
  Heading,
  Icon,
  Pressable,
  VStack,
  Text,
} from "native-base";
import React, { useState } from "react";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { AppBar } from "../../Components/AppBar/index";
import { Footer } from "../../Components/Footer/index";

export function Home() {
  const [selected, setSelected] = useState(1);

  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const handleAddTodo = () => {
    if (todoItem === "") {
    } else {
      const newTodo = {
        label: todoItem,
        completed: false,
        favorite: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setTodoItem("");
    }
  };

  return (
    <Center>
      <VStack
        w='100%'
        h='100%'
        justifyContent='space-between'
      >
        <Fab
          renderInPortal={false}
          shadow={2}
          size='sm'
          icon={
            <Icon
              color='#FFF'
              as={AntDesign}
              name='plus'
              size='sm'
            />
          }
        />
        <AppBar />
        <Footer
          selected={selected}
          setSelected={setSelected}
        />
      </VStack>
    </Center>
  );
}
