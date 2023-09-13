import { Stack } from 'expo-router';

export default function AreaLayout() {
  return (
    <Stack>
      <Stack.Screen name="indexArea" options={{ headerShown: false }} />
      <Stack.Screen name="levels" options={{ headerShown: false }} />
    </Stack>
  );
}
