import { Box, HStack, FlatList, Spacer, IconButton } from 'native-base';
import { View, Text, styles } from '../../../../components/Themed';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';

export default function Levels() {
  const data = [
    { id: 1, name: 'Nivel 1' },
    { id: 2, name: 'Nivel 2' },
    { id: 3, name: 'Nivel 3' },
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
                  colorScheme="indigo"
                  _icon={{
                    as: MaterialCommunityIcons,
                    name: 'layers-triple-outline',
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
