import { Button, Modal, FormControl, Input, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { RisksEditModalProps } from '../../../services/types/Types';

const RisksEditModal = ({ item, showEditModal, handleCloseEditModal }: RisksEditModalProps) => {
  return (
    <Center>
      <Modal isOpen={showEditModal} onClose={handleCloseEditModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Editar Risco</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" value={item.name} />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button style={styles.button} bg="#83848B" onPress={handleCloseEditModal}>
                <Text style={styles.text}>Cancelar</Text>
              </Button>
              <Button style={styles.button} bg="#F63904" onPress={handleCloseEditModal}>
                <Text style={styles.text}>Salvar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default RisksEditModal;
