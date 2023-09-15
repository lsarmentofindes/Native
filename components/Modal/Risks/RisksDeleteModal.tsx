import { Button, Modal, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { RisksDeleteModalProps } from '../../../services/types/Types';

const RisksDeleteModal = ({ item, showDeleteModal, handleCloseDeleteModal }: RisksDeleteModalProps) => {
  return (
    <Center>
      <Modal isOpen={showDeleteModal} onClose={handleCloseDeleteModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Deletar Risco</Modal.Header>
          <Modal.Body>
            <Text>Confirme que deseja deletar {item.name} no botão abaixo.</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button style={styles.button} bg="#83848B" onPress={handleCloseDeleteModal}>
                <Text style={styles.text}>Cancelar</Text>
              </Button>
              <Button style={styles.button} bg="#F63904" onPress={handleCloseDeleteModal}>
                <Text style={styles.text}>Deletar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default RisksDeleteModal;
