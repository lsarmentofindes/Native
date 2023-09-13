import { StyleSheet, Pressable } from 'react-native';
import { CancelBtn, Text, View, styles } from '../../../components/Themed';
import { Box, Center, Heading, Input, Stack, VStack } from 'native-base';
import { Link, useNavigation } from 'expo-router';
import ProfileForm from '../../../components/ProfileForm';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Box style={styles.box}>
        <ProfileForm Children={<CancelBtn navigation={navigation} />} />
      </Box>
    </View>
  );
}
