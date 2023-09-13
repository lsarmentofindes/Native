import { Pressable } from 'react-native';
import { CancelBtn, Text, View, styles } from '../../../components/Themed';
import { Box, Center, Input, Stack, VStack } from 'native-base';
import { Link, useNavigation } from 'expo-router';

export default function Connection() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Box style={styles.box}>
        <Text style={{ bottom: 15, left: 15 }}>Informe os parâmetros de conexão da API</Text>
        <VStack space={4} right="15px" alignItems="center">
          <Center px="30px">
            <Input placeholder="Endereço IP" />
          </Center>
          <Center px="30px">
            <Input placeholder="Porta" />
          </Center>
        </VStack>
        <Stack direction="row" justifyContent={'flex-end'} right={45} space={4}>
          <CancelBtn navigation={navigation} />
          <Center bg="#F63904" style={styles.button} shadow={'3'} top={303}>
            <Link href={'/'} asChild>
              <Pressable>{({ pressed }) => <Text style={styles.text}>Salvar</Text>}</Pressable>
            </Link>
          </Center>
        </Stack>
      </Box>
    </View>
  );
}
