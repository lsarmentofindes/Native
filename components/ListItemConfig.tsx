import { StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Center, Text, Flex } from 'native-base';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import React from 'react';

type ListItemProps = {
  title: string;
  children: React.ReactNode;
};
const ListItemConfig = ({ title, children }: ListItemProps) => {
  return (
    <Flex direction="row" justify="space-between">
      <Center size="16" alignItems="left">
        <Text style={styles.listText}>{title}</Text>
      </Center>
      <Center size="16">
        {children}
        {/* <Link href={link} asChild>
          <Pressable>
            {({ pressed }) => (
              <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link> */}
      </Center>
    </Flex>
  );
};

const styles = StyleSheet.create({
  listText: {
    fontSize: 14,
    fontWeight: '500',
    width: 100,
  },
});

export default ListItemConfig;
