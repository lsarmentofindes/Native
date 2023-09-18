import { Button, Modal, FormControl, Input, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { ChecklistItemCreateModalProps } from '../../../services/types/Types';

const CheckListItemCreateModal = ({ item, showCreateListItemModal, handleCloseCreateChecklistItemModal }: ChecklistItemCreateModalProps) => {
  return (
    <Center>
      <Modal isOpen={showCreateListItemModal} onClose={handleCloseCreateChecklistItemModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header >Cadastrar Item</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button style={styles.button} bg="#83848B" onPress={handleCloseCreateChecklistItemModal}>
                <Text style={styles.text}>Cancelar</Text>
              </Button>
              <Button style={styles.button} bg="#F63904" onPress={handleCloseCreateChecklistItemModal}>
                <Text style={styles.text}>Salvar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default CheckListItemCreateModal;
