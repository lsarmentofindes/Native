import { Button, Modal, FormControl, Input, Center } from 'native-base';
import { styles, Text } from '../../Themed';
import { LevelCreateModalProps } from '../../../services/types/Types';
import Colors from '../../../constants/Colors';

const LevelCreateModal = ({ showCreateLevelModal, handleCloseCreateLevelModal }: LevelCreateModalProps) => {
  return (
    <Center>
      <Modal isOpen={showCreateLevelModal} onClose={handleCloseCreateLevelModal}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Cadastrar Nível</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" />
            </FormControl>
            <FormControl mt="3">
              <Input
                placeholder="Altitude mínima"
                InputRightElement={<Text style={{ right: 10, color: Colors.inputLabelParam }}>m</Text>}
              />
            </FormControl>
            <FormControl mt="3">
              <Input
                placeholder="Altitude máxima"
                InputRightElement={<Text style={{ right: 10, color: Colors.inputLabelParam }}>m</Text>}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button style={styles.button} bg="#83848B" onPress={handleCloseCreateLevelModal}>
                <Text style={styles.text}>Cancelar</Text>
              </Button>
              <Button style={styles.button} bg="#F63904" onPress={handleCloseCreateLevelModal}>
                <Text style={styles.text}>Salvar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default LevelCreateModal;
