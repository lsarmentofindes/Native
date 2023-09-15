import { Button, Modal, FormControl, Input, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { LevelEditModalProps } from '../../../services/types/Types';
import Colors from '../../../constants/Colors';

const LevelEditModal = ({ item, showEditModal, handleCloseEditModal }: LevelEditModalProps) => {
  return (
    <Center>
      <Modal isOpen={showEditModal} onClose={handleCloseEditModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Editar Nível</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" value={item.name.toString()} />
            </FormControl>
            <FormControl mt="3">
              <Input
                placeholder="Altitude mínima"
                value={item.minHeight.toString()}
                InputRightElement={<Text style={{ right: 10, color: Colors.inputLabelParam }}>m</Text>}
              />
            </FormControl>
            <FormControl mt="3">
              <Input
                placeholder="Altitude máxima"
                value={item.maxHeight.toString()}
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

export default LevelEditModal;
