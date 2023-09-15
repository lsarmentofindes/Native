import { Box, Stack, VStack, Center, Input, Button } from 'native-base';
import { View, Text, styles } from '../../../../components/Themed';
import {
  NoiseParamForm,
  CarbonMonoxideParamForm,
  HeatParamForm,
  ExplosivityLimitParamForm,
  SulfurDioxideParamForm,
  AerodispersoidsParamForm,
} from '../../../../components/Parameters/ParametersForms';
import { Pressable } from 'react-native';
import { Link, useNavigation } from 'expo-router';

export default function Parameters() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Box style={styles.box}>
        <VStack space="xl" marginRight="45px">
          <NoiseParamForm />
          <CarbonMonoxideParamForm />
          <ExplosivityLimitParamForm />
          <HeatParamForm />
          <SulfurDioxideParamForm />
          <AerodispersoidsParamForm />
        </VStack>
        <Stack direction="row" justifyContent={'flex-end'} right={45} marginTop={'97px'} space={4}>
          <Center shadow={'3'}>
            <Button bg="#83848B" style={styles.button} onPress={() => navigation.goBack()}>
              <Text style={styles.text}>Cancelar</Text>
            </Button>
          </Center>
          <Center bg="#F63904" style={styles.button} shadow={'3'}>
            <Link href={'/'} asChild>
              <Pressable>{({ pressed }) => <Text style={styles.text}>Salvar</Text>}</Pressable>
            </Link>
          </Center>
        </Stack>
      </Box>
    </View>
  );
}
