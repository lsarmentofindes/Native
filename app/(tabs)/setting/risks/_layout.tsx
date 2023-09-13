import { Stack } from 'expo-router';

export default function AreaLayout() {
  return (
    <Stack>
      <Stack.Screen name="indexRisks" options={{ headerShown: false }} />
    </Stack>
  );
}
