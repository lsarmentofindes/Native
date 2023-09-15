import { Box, HStack, FlatList, Spacer, IconButton } from 'native-base';
import { View, Text, styles } from '../../../../components/Themed';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import { useState } from 'react';
import RisksDeleteModal from '../../../../components/Modal/Risks/RisksDeleteModal';
import RisksEditModal from '../../../../components/Modal/Risks/RisksEditModal';
import { RisksProps } from '../../../../services/types/Types';
import { List } from 'react-native-paper';

const initialState = { id: 0, name: '' };
const data: RisksProps[] = [
  { id: 1, name: 'Projeção de Material' },
  { id: 2, name: 'Risco "B"' },
  { id: 3, name: 'Risco "F"' },
];

export default function risks() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RisksProps>(initialState);

  function handleCloseEditModal() {
    setShowEditModal(false);
  }
  function handleCloseDeleteModal() {
    setShowDeleteModal(false);
  }
  function showItemToEditModal(item: RisksProps) {
    setShowEditModal(true);
    setSelectedItem(item);
  }
  function showItemToDeleteModal(item: RisksProps) {
    setShowDeleteModal(true);
    setSelectedItem(item);
  }

  const riskCrud = (item: RisksProps) => {
    return (
      <HStack style={{  left: 550 }} justifyContent="flex-end" alignItems="center">
        <IconButton
          colorScheme="indigo"
          _icon={{
            as: MaterialIcons,
            name: 'add-circle-outline',
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
        <RisksEditModal item={selectedItem} showEditModal={showEditModal} handleCloseEditModal={handleCloseEditModal} />
        <IconButton
          onPress={() => showItemToDeleteModal(item)}
          _icon={{
            as: AntDesign,
            name: 'delete',
            color: Colors.primaryColor,
          }}
        />
        <RisksDeleteModal
          item={selectedItem}
          name={item.name}
          showDeleteModal={showDeleteModal}
          handleCloseDeleteModal={handleCloseDeleteModal}
        />
      </HStack>
    );
  };
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
              <List.AccordionGroup>
                <Box style={{ width: 100, display: 'flex', justifyContent: 'flex-end', top: 53, zIndex: 20 }}>
                  {riskCrud(item)}
                </Box>
                <List.Accordion theme={{ colors: { background: 'transparent' } }} title={item.name} id={item.id}>
                  <List.Item title="Item 1" />
                </List.Accordion>
              </List.AccordionGroup>
            </Box>
          )}
        />
      </Box>
    </View>
  );
}
