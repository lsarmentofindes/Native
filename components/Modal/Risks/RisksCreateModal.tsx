import { Button, Modal, FormControl, Input, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { RisksCreateModalProps } from '../../../services/types/Types';

const RisksCreateModal = ({ showCreateRisksModal, handleCloseCreateRisksModal }: RisksCreateModalProps) => {
  return (
    <Center>
      <Modal isOpen={showCreateRisksModal} onClose={handleCloseCreateRisksModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Cadastrar Risco</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button style={styles.button} bg="#83848B" onPress={handleCloseCreateRisksModal}>
                <Text style={styles.text}>Cancelar</Text>
              </Button>
              <Button style={styles.button} bg="#F63904" onPress={handleCloseCreateRisksModal}>
                <Text style={styles.text}>Salvar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default RisksCreateModal;
