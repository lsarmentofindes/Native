import { Box, HStack, FlatList, Spacer, IconButton } from 'native-base';
import { View, Text, styles } from '../../../../components/Themed';
import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import LevelEditModal from '../../../../components/Modal/Level/LevelEditModal';
import LevelDeleteModal from '../../../../components/Modal/Level/LevelDeleteModal';
import { LevelsProps } from '../../../../services/types/Types';

const initialState = { id: 0, name: '', minHeight: 0, maxHeight: 0 };
const data: LevelsProps[] = [
  { id: 1, name: 'Nível 1', minHeight: 3, maxHeight: 6 },
  { id: 2, name: 'Nível 2', minHeight: 6, maxHeight: 9 },
  { id: 3, name: 'Nível 3', minHeight: 9, maxHeight: 12 },
];

export default function Levels() {
  const router = useRouter();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<LevelsProps>(initialState);

  function handleCloseEditModal() {
    setShowEditModal(false);
  }
  function handleCloseDeleteModal() {
    setShowDeleteModal(false);
  }
  function showItemToEditModal(item: LevelsProps) {
    setShowEditModal(true);
    setSelectedItem(item);
  }
  function showItemToDeleteModal(item: LevelsProps) {
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
                  onPress={() => router.push('/(tabs)/setting/area/parameters')}
                  _icon={{
                    as: Entypo,
                    name: 'sound-mix',
                    color: Colors.primaryColor,
                  }}
                />
                <IconButton
                  onPress={() => router.push('/(tabs)/setting/area/risks')}
                  _icon={{
                    as: AntDesign,
                    name: 'exclamationcircleo',
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
                <LevelEditModal
                  item={selectedItem}
                  showEditModal={showEditModal}
                  handleCloseEditModal={handleCloseEditModal}
                />
                <IconButton
                  onPress={() => showItemToDeleteModal(item)}
                  _icon={{
                    as: AntDesign,
                    name: 'delete',
                    color: Colors.primaryColor,
                  }}
                />
                <LevelDeleteModal
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
