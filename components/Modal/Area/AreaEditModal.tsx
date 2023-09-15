import { Button, Modal, FormControl, Input, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { AreaEditModalProps } from '../../../services/types/Types';
import Colors from '../../../constants/Colors';

const AreaEditModal = ({ item, showEditModal, handleCloseEditModal }: AreaEditModalProps) => {
  return (
    <Center>
      <Modal isOpen={showEditModal} onClose={handleCloseEditModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Editar Área</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" value={item.name} />
            </FormControl>
            <FormControl mt="3">
              <Input
                placeholder="Latitude"
                value={item.latitude.toString()}
              />
            </FormControl>
            <FormControl mt="3">
              <Input
                placeholder="Longitude"
                value={item.longitude.toString()}
              />
            </FormControl>
            <FormControl mt="3">
              <Input
                placeholder="Raio (m)"
                value={item.radius.toString()}
                InputRightElement={<Text style={{ right: 10, color: Colors.inputLabelParam }}>m</Text>}
              />
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

export default AreaEditModal;
