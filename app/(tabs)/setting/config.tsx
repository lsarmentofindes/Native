import { StyleSheet } from 'react-native';
import { Heading, Box } from 'native-base';
import ListItemConfig from '../../../components/ListItemConfig';
import { View, styles } from '../../../components/Themed';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ConfigScreen() {
  return (
    <View style={styles.container}>
      <Heading style={styles.titleScreen}>Configurações</Heading>
      <Box style={styles.box}>
        <Link href="/(tabs)/setting/profile" asChild>
          <Pressable>
            {({ pressed }) => (
              <ListItemConfig title="Perfil">
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              </ListItemConfig>
            )}
          </Pressable>
        </Link>
        <Link href="/(tabs)/setting/connection" asChild>
          <Pressable>
            {({ pressed }) => (
              <ListItemConfig title="Conexão">
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              </ListItemConfig>
            )}
          </Pressable>
        </Link>
        <Link href="/(tabs)/setting/area/indexArea" asChild>
          <Pressable>
            {({ pressed }) => (
              <ListItemConfig title="Áreas">
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              </ListItemConfig>
            )}
          </Pressable>
        </Link>
        <Link href="/(tabs)/setting/events" asChild>
          <Pressable>
            {({ pressed }) => (
              <ListItemConfig title="Evento">
                <SimpleLineIcons name="arrow-right" color="#C2C2C2" size={20} style={{ opacity: pressed ? 0.5 : 1 }} />
              </ListItemConfig>
            )}
          </Pressable>
        </Link>
      </Box>
    </View>
  );
}
