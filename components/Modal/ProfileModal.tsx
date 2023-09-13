import React from 'react';
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import { styles, Text } from '../Themed';

const ProfileModal = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Por favor, identifique-se</Modal.Header>
          <Modal.Body>
            <FormControl>
              <Input placeholder="Nome" />
            </FormControl>
            <FormControl mt="3">
              <Input placeholder="Matrícula" />
            </FormControl>
            <FormControl mt="3">
              <Input placeholder="Cargo" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                style={styles.button}
                bg="#83848B"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text style={styles.text}>Cancelar</Text>
              </Button>
              <Button
                style={styles.button}
                bg="#F63904"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text style={styles.text}>Salvar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ProfileModal;
