import { Pressable } from 'react-native';
import { Center, Input, Stack, VStack } from 'native-base';
import { Link } from 'expo-router';
import { styles, Text } from './Themed';
import React from 'react';

type ProfileFormProps = {
  Children: React.ReactNode;
};

const ProfileForm = ({ Children }: ProfileFormProps) => {
  return (
    <>
      <VStack space={4} right="15px" alignItems="center">
        <Center px="30px">
          <Input placeholder="Nome" />
        </Center>
        <Center px="30px">
          <Input placeholder="Matrícula" />
        </Center>
        <Center px="30px">
          <Input placeholder="Cargo" />
        </Center>
      </VStack>
      <Stack direction="row" justifyContent={'flex-end'} right={45} space={4}>
        {Children}
        <Center bg="#F63904" style={styles.button} shadow={'3'} top={303}>
          <Link href={'/'} asChild>
            <Pressable>{({ pressed }) => <Text style={styles.text}>Salvar</Text>}</Pressable>
          </Link>
        </Center>
      </Stack>
    </>
  );
};

export default ProfileForm;
