import { Stack } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Button, Pressable } from 'native-base';

export default function SettingLayout() {
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
            <Button bgColor={'transparent'} onPress={() => console.log('oi')}>
              <Feather name="refresh-cw" size={25} color="#F63904" style={{ marginRight: 15 }} />
            </Button>
          ),
        }}
      />
      <Stack.Screen name="area" options={{ title: 'Área' }} />
      <Stack.Screen name="risks" options={{ title: 'Riscos' }} />
      <Stack.Screen name="events" options={{ title: 'Evento' }} />
    </Stack>
  );
}
