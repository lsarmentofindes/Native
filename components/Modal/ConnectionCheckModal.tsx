import React from 'react';
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from 'native-base';
import { useState } from 'react';
import { styles, Text } from '../Themed';

const ConnectionCheckModal = ({ showModal, setShowModal }: any) => {
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Teste de conexão</Modal.Header>
          <Modal.Body>Conexão estabelecida com sucesso.</Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                style={styles.button}
                bg="#83848B"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <Text style={styles.text}>Fechar</Text>
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ConnectionCheckModal;
