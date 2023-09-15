import { Stack } from 'expo-router';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Button, Pressable } from 'native-base';
import ConnectionCheckModal from '../../../components/Modal/ConnectionCheckModal';
import { useState } from 'react';

export default function SettingLayout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="config" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: 'Perfil' }} />
      <Stack.Screen
        name="connection"
        options={{
          title: 'Conexão',
          headerRight: () => (
            <Button bgColor={'transparent'} onPress={() => setShowModal(true)}>
              <Feather name="refresh-cw" size={25} color="#F63904" style={{ marginRight: 15 }} />
              <ConnectionCheckModal showModal={showModal} setShowModal={setShowModal} />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="area"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="risks"
        options={{
          title: 'Riscos',
          headerRight: () => (
            <Button bgColor={'transparent'} onPress={() => setShowModal(true)}>
              <MaterialIcons name="add-circle-outline" size={25} color="#F63904" style={{ marginRight: 15 }} />
              <ConnectionCheckModal showModal={showModal} setShowModal={setShowModal} />
            </Button>
          ),
        }}
      /> */}
      <Stack.Screen name="events" options={{ title: 'Evento' }} />
    </Stack>
  );
}
