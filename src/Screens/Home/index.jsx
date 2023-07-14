import {
  StatusBar,
  Checkbox,
  Center,
  Fab,
  HStack,
  Heading,
  Icon,
  Pressable,
  VStack,
  Text,
  Box,
} from "native-base";
import React, { useState } from "react";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { AppBar } from "../../Components/AppBar";
import { Footer } from "../../Components/Footer";
import { List } from "../../Components/List";

export function Home() {
  return (
    <Center safeArea>
      <VStack
        w='100%'
        h='100%'
        justifyContent='space-between'
        bgColor='coolGray.50'
      >
        <AppBar />
        <VStack>
          <Box mb='3'>
            <List
              title='Favorites'
              favorite={true}
            />
          </Box>
          <Box>
            <List
              title='TodoList'
              favorite={false}
            />
          </Box>
        </VStack>
        <Fab
          position='absolute'
          bottom='100'
          renderInPortal={false}
          bgColor='indigo.600'
          shadow={1}
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
        <Footer />
      </VStack>
    </Center>
  );
}
