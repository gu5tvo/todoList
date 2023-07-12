import React from "react";
import { Pressable, Center, Icon, Text, HStack } from "react-native";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export function Footer(props) {
  const { selected, setSelected } = props;
  return (
    <HStack
      bg='indigo.600'
      alignItems='center'
      safeAreaBottom={true}
      shadow={6}
    >
      <Pressable
        cursor='pointer'
        opacity={selected === 0 ? 1 : 0.5}
        py='3'
        flex={1}
        onPress={() => setSelected(0)}
      >
        <Center>
          <Icon
            mb='1'
            as={
              <MaterialCommunityIcons
                name={selected ? "home" : "home-outline"}
              />
            }
            color='#FFF'
            size='sm'
          />
          <Text
            color='#FFF'
            fontSize='12'
          >
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor='pointer'
        opacity={selected === 1 ? 1 : 0.5}
        py='2'
        flex={1}
        onPress={() => setSelected(1)}
      >
        <Center>
          <Icon
            mb='1'
            as={<MaterialIcons name='search' />}
            color='white'
            size='sm'
          />
          <Text
            color='white'
            fontSize='12'
          >
            Search
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor='pointer'
        opacity={selected === 2 ? 1 : 0.6}
        py='2'
        flex={1}
        onPress={() => setSelected(2)}
      >
        <Center>
          <Icon
            mb='1'
            as={
              <MaterialCommunityIcons
                name={selected === 2 ? "heart" : "heart-outline"}
              />
            }
            color='white'
            size='sm'
          />
          <Text
            color='white'
            fontSize='12'
          >
            Favorites
          </Text>
        </Center>
      </Pressable>
      <Pressable
        cursor='pointer'
        opacity={selected === 3 ? 1 : 0.5}
        py='2'
        flex={1}
        onPress={() => setSelected(3)}
      >
        <Center>
          <Icon
            mb='1'
            as={
              <MaterialCommunityIcons
                name={selected === 3 ? "account" : "account-outline"}
              />
            }
            color='white'
            size='sm'
          />
          <Text
            color='white'
            fontSize='12'
          >
            Account
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
}
