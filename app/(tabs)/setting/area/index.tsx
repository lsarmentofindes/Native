import { StyleSheet } from 'react-native';
import { Box, Center, Heading, Stack } from 'native-base';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { View, Text } from '../../../../components/Themed';

export default function Area() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Área</Heading>
      <Box style={styles.box}>
        <Stack direction="row" mb="2.5" mt="1.5" space={3}>
          <Center
            size="16"
            bg="primary.400"
            rounded="sm"
            _text={{
              color: 'warmGray.50',
              fontWeight: 'medium',
            }}
            shadow={'3'}
          >
            <Link href={'/'} asChild>
              <Pressable>{({ pressed }) => <Text>Cancelar</Text>}</Pressable>
            </Link>
          </Center>
          <Center
            bg="primary.500"
            size="16"
            rounded="sm"
            _text={{
              color: 'warmGray.50',
              fontWeight: 'medium',
            }}
            shadow={'3'}
          >
            <Link href={'/'} asChild>
              <Pressable>{({ pressed }) => <Text>Salvar</Text>}</Pressable>
            </Link>
          </Center>
        </Stack>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    top: 48,
  },
  box: {
    width: '100%',
    top: 125,
    left: 14,
  },
});
