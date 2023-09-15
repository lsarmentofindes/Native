import { Box, HStack, FlatList, Spacer, IconButton } from 'native-base';
import { View, Text, styles } from '../../../../components/Themed';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import { useRouter } from 'expo-router';
import AreaDeleteModal from '../../../../components/Modal/Area/AreaDeleteModal';
import AreaEditModal from '../../../../components/Modal/Area/AreaEditModal';
import { useState } from 'react';
import { AreaProps } from '../../../../services/types/Types';

const initialState = { id: 0, name: '', latitude: 0, longitude: 0, radius: 0 };
const data: AreaProps[] = [
  { id: 1, name: 'Alto Forno', latitude: 100, longitude: 70, radius: 70 },
  { id: 2, name: 'Área "B"', latitude: 80, longitude: 105, radius: 60 },
  { id: 3, name: 'Área "F"', latitude: 90, longitude: 120, radius: 45 },
];

export default function Area() {
  const router = useRouter();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AreaProps>(initialState);

  function handleCloseEditModal() {
    setShowEditModal(false);
  }
  function handleCloseDeleteModal() {
    setShowDeleteModal(false);
  }
  function showItemToEditModal(item: AreaProps) {
    setShowEditModal(true);
    setSelectedItem(item);
  }
  function showItemToDeleteModal(item: AreaProps) {
    setShowDeleteModal(true);
    setSelectedItem(item);
  }

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
                  onPress={() => router.push('/(tabs)/setting/area/levels')}
                  _icon={{
                    as: Feather,
                    name: 'layers',
                    color: Colors.primaryColor,
                  }}
                />
                <IconButton
                  onPress={() => showItemToEditModal(item)}
                  _icon={{
                    as: MaterialIcons,
                    name: 'edit',
                    color: Colors.primaryColor,
                  }}
                />
                <AreaEditModal item={item} showEditModal={showEditModal} handleCloseEditModal={handleCloseEditModal} />
                <IconButton
                  onPress={() => showItemToDeleteModal(item)}
                  _icon={{
                    as: AntDesign,
                    name: 'delete',
                    color: Colors.primaryColor,
                  }}
                />
                <AreaDeleteModal
                  item={selectedItem}
                  showDeleteModal={showDeleteModal}
                  handleCloseDeleteModal={handleCloseDeleteModal}
                />
              </HStack>
            </Box>
          )}
        />
      </Box>
    </View>
  );
}
