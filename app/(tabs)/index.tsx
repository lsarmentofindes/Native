import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, styles } from '../../components/Themed';
import ProfileModal from '../../components/Modal/ProfileModal';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ProfileModal />
      <Text style={styles.title}></Text>
    </View>
  );
}
