import React, { useState } from "react";
import { Pressable, Center, Icon, Text, HStack } from "native-base";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export function Footer() {
  const [selected, setSelected] = useState(1);

  return (
    <HStack
      bg='#fff'
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
            as={<MaterialCommunityIcons name='home' />}
            color={selected === 0 ? "indigo.600" : "#3F3E42"}
            size='sm'
          />
          <Text
            color={selected === 0 ? "indigo.600" : "#3F3E42"}
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
            color={selected === 1 ? "indigo.600" : "#3F3E42"}
            size='sm'
          />
          <Text
            color={selected === 1 ? "indigo.600" : "#3F3E42"}
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
            color={selected === 2 ? "indigo.600" : "#3F3E42"}
            size='sm'
          />
          <Text
            color={selected === 2 ? "indigo.600" : "#3F3E42"}
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
            color={selected === 3 ? "indigo.600" : "#3F3E42"}
            size='sm'
          />
          <Text
            color={selected === 3 ? "indigo.600" : "#3F3E42"}
            fontSize='12'
          >
            Account
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
}
