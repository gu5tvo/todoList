import React from "react";
import { StatusBar, Box, HStack, IconButton, Text, Icon } from "native-base";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
export function AppBar() {
  return (
    <>
      <HStack
        bg='indigo.600'
        px='1'
        py='3'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <HStack alignItems='center'>
          <IconButton
            icon={
              <Icon
                size='sm'
                as={MaterialIcons}
                name='menu'
                color='white'
              />
            }
          />
          <Text
            color='white'
            fontSize='20'
            fontWeight='bold'
          >
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name='search'
                size='sm'
                color='white'
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}
