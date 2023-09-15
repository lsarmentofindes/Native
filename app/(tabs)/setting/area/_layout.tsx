import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'native-base';
import { useState } from 'react';
import { styles } from '../../../../components/Themed';
import AreaCreateModal from '../../../../components/Modal/Area/AreaCreateModal';
import LevelCreateModal from '../../../../components/Modal/Level/LevelCreateModal';
import RisksCreateModal from '../../../../components/Modal/Risks/RisksCreateModal';
import Colors from '../../../../constants/Colors';

export default function AreaLayout() {
  const [showCreateAreaModal, setShowCreateAreaModal] = useState(false);
  const [showCreateLevelModal, setShowCreateLevelModal] = useState(false);
  const [showCreateRisksModal, setShowCreateRisksModal] = useState(false);

  function handleCloseCreateAreaModal() {
    setShowCreateAreaModal(false);
  }
  function handleCloseCreateLevelModal() {
    setShowCreateLevelModal(false);
  }
  function handleCloseCreateRisksModal() {
    setShowCreateRisksModal(false);
  }

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: styles.title,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="indexArea"
        options={{
          title: 'Áreas',
          headerRight: () => (
            <Button bgColor={'transparent'} onPress={() => setShowCreateAreaModal(true)}>
              <MaterialIcons name="add-circle-outline" size={25} color={Colors.primaryColor} style={{ marginRight: 15 }} />
              <AreaCreateModal
                showCreateAreaModal={showCreateAreaModal}
                handleCloseCreateAreaModal={handleCloseCreateAreaModal}
              />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="levels"
        options={{
          title: 'Níveis',
          headerRight: () => (
            <Button bgColor={'transparent'} onPress={() => setShowCreateLevelModal(true)}>
              <MaterialIcons name="add-circle-outline" size={25} color={Colors.primaryColor} style={{ marginRight: 15 }} />
              <LevelCreateModal
                showCreateLevelModal={showCreateLevelModal}
                handleCloseCreateLevelModal={handleCloseCreateLevelModal}
              />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="risks"
        options={{
          title: 'Riscos',
          headerRight: () => (
            <Button bgColor={'transparent'} onPress={() => setShowCreateRisksModal(true)}>
              <MaterialIcons name="add-circle-outline" size={25} color={Colors.primaryColor} style={{ marginRight: 15 }} />
              <RisksCreateModal
                showCreateRisksModal={showCreateRisksModal}
                handleCloseCreateRisksModal={handleCloseCreateRisksModal}
              />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="parameters"
        options={{
          title: 'Parâmetros',
        }}
      />
    </Stack>
  );
}
