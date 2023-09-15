/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, useColorScheme, View as DefaultView, Pressable, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Styles from '../constants/Styles';
import { Href, Link, useNavigation } from 'expo-router';
import { Button, Center } from 'native-base';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function CancelBtn({ navigation }: any) {
  return (
    <Center shadow={'3'} top={303}>
      <Button bg="#83848B" style={styles.button} onPress={() => navigation.goBack()}>
        <DefaultText style={styles.text}>Cancelar</DefaultText>
      </Button>
    </Center>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleScreen: {
    fontSize: 16,
    fontWeight: '600',
    top: 48,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#323236',
  },
  box: {
    width: '100%',
    top: 125,
    left: 14,
  },
  button: {
    width: 90,
    height: 37,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FAFAFA',
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#323236',
  },
  hStackForm: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
});
