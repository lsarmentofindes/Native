import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

//import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
//<MaterialCommunityIcons name="chart-line" size={24} color="#FB3A04" />
//<Feather name="map-pin" size={24} color="black" />
//<MaterialCommunityIcons name="format-list-checkbox" size={24} color="black" />
//<Ionicons name="settings-outline" size={24} color="black" />
//<TabBarIcon name="code" color={color} />

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FB3A04' ?? '#D5D7DF',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-line" size={24} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color }) => <Feather name="map-pin" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="format-list-checkbox" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="settings-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
