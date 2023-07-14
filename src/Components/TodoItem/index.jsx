import {
  Checkbox,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
} from "native-base";
import React from "react";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

export function TodoItem({ todo, handleToggleTodo, index }) {
  return (
    <>
      <HStack
        justifyContent='space-between'
        bgColor='white'
        alignItems='center'
        mt='1'
        mb='1'
        borderWidth='1'
        shadow={3}
      >
        <HStack>
          <IconButton
            onPress={() => handleToggleTodo(index)}
            icon={
              todo.completed ? (
                <Icon
                  as={MaterialIcons}
                  name='check-circle'
                  color='indigo.600'
                  size='lg'
                />
              ) : (
                <Icon
                  as={Feather}
                  name='circle'
                  color='indigo.600'
                  size='lg'
                />
              )
            }
          />
          <VStack>
            <Heading>{todo.label}</Heading>
            <Text>{todo.label}</Text>
          </VStack>
        </HStack>
        <VStack>
          <IconButton
            icon={
              <Icon
                mb='1'
                as={<Feather name='more-vertical' />}
                color='#3F3E42'
                size='sm'
              />
            }
          />
          <Text>{todo.label}</Text>
        </VStack>
      </HStack>
    </>
  );
}
