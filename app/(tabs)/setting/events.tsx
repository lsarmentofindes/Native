import { Pressable, useColorScheme } from 'react-native';
import { CancelBtn, Text, View, styles } from '../../../components/Themed';
import { Box, Center, Radio, Stack, VStack } from 'native-base';
import { Link, useNavigation } from 'expo-router';
import { useState } from 'react';
import Colors from '../../../constants/Colors';

export default function Events() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const [value, setValue] = useState('one');

  return (
    <View style={styles.container}>
      <Box style={styles.box}>
        <Text style={{ bottom: 15, left: 15, fontWeight: '500', fontSize: 14 }}>Tempo de medição</Text>
        <Box style={{ left: 15 }}>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            <Radio value="one" _icon={{color: Colors.primaryColor}} _checked={Colors.radioBtn} my={2}>
              <Text>1 minuto</Text>
            </Radio>
            <Radio value="two" _icon={{color: Colors.primaryColor}} _checked={Colors.radioBtn} my={2}>
              <Text>2 minuto</Text>
            </Radio>
            <Radio value="five" _icon={{color: Colors.primaryColor}} _checked={Colors.radioBtn} my={2}>
              <Text>5 minuto</Text>
            </Radio>
            <Radio value="manual" _icon={{color: Colors.primaryColor}} _checked={Colors.radioBtn} my={2}>
              <Text>Manual</Text>
            </Radio>
          </Radio.Group>
        </Box>

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
