import { Button, Modal, FormControl, Input, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { AreaCreateModalProps } from '../../../services/types/Types';

const AreaCreateModal = ({ showCreateAreaModal, handleCloseCreateAreaModal }: AreaCreateModalProps) => {
  return (
    <Center>
      <Modal isOpen={showCreateAreaModal} onClose={handleCloseCreateAreaModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Cadastrar Área</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" />
            </FormControl>
            <FormControl mt="3">
              <Input placeholder="Latitude" />
            </FormControl>
            <FormControl mt="3">
              <Input placeholder="Longitude" />
            </FormControl>
            <FormControl mt="3">
              <Input placeholder="Raio (m)" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button style={styles.button} bg="#83848B" onPress={handleCloseCreateAreaModal}>
                <Text style={styles.text}>Cancelar</Text>
              </Button>
              <Button style={styles.button} bg="#F63904" onPress={handleCloseCreateAreaModal}>
                <Text style={styles.text}>Salvar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default AreaCreateModal;
