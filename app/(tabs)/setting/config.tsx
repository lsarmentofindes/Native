import { StyleSheet } from 'react-native';
import { Heading, Box } from 'native-base';
import ListItemConfig from '../../../components/ListItemConfig';
import { View } from '../../../components/Themed';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>Configurações</Heading>
      <Box style={styles.box}>
        <ListItemConfig title="Perfil">
          <Link href="/(tabs)/setting/profile" asChild>
            <Pressable>
              {({ pressed }) => (
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              )}
            </Pressable>
          </Link>
        </ListItemConfig>
        <ListItemConfig title="Conexão">
          <Link href="/(tabs)/setting/connection" asChild>
            <Pressable>
              {({ pressed }) => (
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              )}
            </Pressable>
          </Link>
        </ListItemConfig>
        <ListItemConfig title="Áreas">
          <Link href="/(tabs)/setting/area" asChild>
            <Pressable>
              {({ pressed }) => (
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              )}
            </Pressable>
          </Link>
        </ListItemConfig>
        <ListItemConfig title="Riscos">
          <Link href="/(tabs)/setting/risks" asChild>
            <Pressable>
              {({ pressed }) => (
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              )}
            </Pressable>
          </Link>
        </ListItemConfig>
        <ListItemConfig title="Evento">
          <Link href="/(tabs)/setting/events" asChild>
            <Pressable>
              {({ pressed }) => (
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              )}
            </Pressable>
          </Link>
        </ListItemConfig>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    top: 48,
  },
  box: {
    width: '100%',
    top: 125,
    left: 14,
  },
});
