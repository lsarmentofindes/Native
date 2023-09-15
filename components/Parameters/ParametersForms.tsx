import { HStack, Center, Input } from 'native-base';
import { styles, Text } from '../Themed';

export function NoiseParamForm() {
  return (
    <>
      <Text style={styles.textTitle}>Ruído (db)</Text>
      <HStack style={styles.hStackForm} space={3}>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Não significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Crítico" />
        </Center>
      </HStack>
    </>
  );
}
export function CarbonMonoxideParamForm() {
  return (
    <>
      <Text style={styles.textTitle}>Monóxido de Carbono - CO (ppm)</Text>
      <HStack style={styles.hStackForm} space={3}>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Não significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Crítico" />
        </Center>
      </HStack>
    </>
  );
}
export function ExplosivityLimitParamForm() {
  return (
    <>
      <Text style={styles.textTitle}>Limite de Explosividade - CH₄ (%)</Text>
      <HStack style={styles.hStackForm} space={3}>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Não significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Crítico" />
        </Center>
      </HStack>
    </>
  );
}
export function HeatParamForm() {
  return (
    <>
      <Text style={styles.textTitle}>Calor (IBUTG - ºC)</Text>
      <HStack style={styles.hStackForm} space={3}>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Não significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Crítico" />
        </Center>
      </HStack>
    </>
  );
}
export function SulfurDioxideParamForm() {
  return (
    <>
      <Text style={styles.textTitle}>Dióxido de Enxofre - SO₂ (ppm)</Text>
      <HStack style={styles.hStackForm} space={3}>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Não significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Crítico" />
        </Center>
      </HStack>
    </>
  );
}
export function AerodispersoidsParamForm() {
  return (
    <>
      <Text style={styles.textTitle}>Aerodispersóides (mg/m³)</Text>
      <HStack style={styles.hStackForm} space={3}>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Não significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Significativo" />
        </Center>
        <Center size="2xl" w="33%" h="37px">
          <Input size="2xl" placeholder="Crítico" />
        </Center>
      </HStack>
    </>
  );
}
