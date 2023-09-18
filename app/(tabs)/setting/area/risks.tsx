import { Box, HStack, FlatList, IconButton } from 'native-base';
import { View, styles } from '../../../../components/Themed';
import { AntDesign, MaterialIcons, Feather } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import { useState } from 'react';
import RisksDeleteModal from '../../../../components/Modal/Risks/RisksDeleteModal';
import RisksEditModal from '../../../../components/Modal/Risks/RisksEditModal';
import { RisksProps } from '../../../../services/types/Types';
import { List } from 'react-native-paper';
import CheckListItemCreateModal from '../../../../components/Modal/Risks/CheckListItemCreateModal';

const initialState = { id: 0, name: '', checklist: [] };
const initialData: RisksProps[] = [
  {
    id: 0,
    name: 'Projeção de Material',
    checklist: [
      { id: 0, item: 'Utilizar óculos de segurança.' },
      { id: 1, item: 'Utilizar capacete de segurança.' },
    ],
  },
  {
    id: 1,
    name: 'Risco "B"',
    checklist: [
      { id: 0, item: 'Utilizar abafador de ruído.' },
      { id: 1, item: 'Utilizar avental de raspa.' },
      { id: 2, item: 'Utilizar capacete de segurança.' },
    ],
  },
  {
    id: 2,
    name: 'Risco "F"',
    checklist: [{ id: 0, item: 'Utilizar cinto de segurança.' }],
  },
];

export default function risks() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateListItemModal, setShowCreateListItemModal] = useState(false);
  const [data, setData] = useState<RisksProps[]>(initialData);
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
  function showItemListToCreateModal(item: RisksProps) {
    setShowCreateListItemModal(true);
    setSelectedItem(item);
  }
  function handleCloseCreateChecklistItemModal() {
    setShowCreateListItemModal(false);
  }

  const handleDelete = (id: number, index: number) => {
    setData((prevData) => {
      const temp = prevData.filter((item) => item.checklist.filter((_, itemI) => itemI !== index));
      return temp;
    });
  };

  //const temp = prevData.filter((_, itemI) => itemI !== index);
  const riskCrud = (item: RisksProps) => {
    return (
      <HStack style={{ left: 550 }} justifyContent="flex-end" alignItems="center">
        <IconButton
          onPress={() => showItemListToCreateModal(item)}
          _icon={{
            as: MaterialIcons,
            name: 'add-circle-outline',
            color: Colors.primaryColor,
          }}
        />
        <CheckListItemCreateModal
          item={selectedItem}
          showCreateListItemModal={showCreateListItemModal}
          handleCloseCreateChecklistItemModal={handleCloseCreateChecklistItemModal}
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
            >
              <List.AccordionGroup>
                <Box style={{ width: 100, display: 'flex', justifyContent: 'flex-end', top: 53, zIndex: 20 }}>
                  {riskCrud(item)}
                </Box>
                <List.Accordion theme={{ colors: { background: 'transparent' } }} title={item.name} id={item.id}>
                  {item.checklist.map((listItem) => (
                    <List.Item
                      key={listItem.id}
                      title={listItem.item}
                      right={() => (
                        <>
                          <IconButton
                            onPress={() => handleDelete(item.id, listItem.id)}
                            _icon={{
                              as: Feather,
                              name: 'minus-circle',
                              color: Colors.primaryColor,
                            }}
                          />
                        </>
                      )}
                    />
                  ))}
                </List.Accordion>
              </List.AccordionGroup>
            </Box>
          )}
        />
      </Box>
    </View>
  );
}
