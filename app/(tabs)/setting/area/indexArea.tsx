import { Box, HStack, FlatList, Spacer, IconButton } from 'native-base';
import { View, Text, styles } from '../../../../components/Themed';
import { AntDesign, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import { Link, useNavigation, useRouter } from 'expo-router';

export default function Area() {
  const navigation = useNavigation();
  const router = useRouter();
  const data = [
    { id: 1, name: 'Alto Forno' },
    { id: 2, name: 'Área "B"' },
    { id: 3, name: 'Área "C"' },
  ];
  return (
    <View style={styles.container}>
      <Box style={styles.box}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'muted.50',
              }}
              borderColor="muted.200"
              marginRight={30}
              py="2"
            >
              <HStack justifyContent="space-between" alignItems="center">
                <Text>{item.name}</Text>
                <Spacer />
                <IconButton
                  onPress={() => <Link href="/(tabs)/setting/area/levels" />}
                  colorScheme="indigo"
                  
                  _icon={{
                    as: Feather,
                    name: 'layers',
                    color: Colors.primaryColor,
                  }}
                />
                <IconButton
                  colorScheme="indigo"
                  _icon={{
                    as: MaterialIcons,
                    name: 'edit',
                    color: Colors.primaryColor,
                  }}
                />
                <IconButton
                  colorScheme="indigo"
                  _icon={{
                    as: AntDesign,
                    name: 'delete',
                    color: Colors.primaryColor,
                  }}
                />
              </HStack>
            </Box>
          )}
        />
      </Box>
    </View>
  );
}
