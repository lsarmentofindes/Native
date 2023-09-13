const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const primaryColor = "#F63904"

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  primaryColor: "#F63904",
  radioBtn: {
      borderColor: primaryColor,
      _hover: {
        borderColor: primaryColor,
        bg: primaryColor,
        _disabled: {
          borderColor: primaryColor,
          bg: primaryColor,
        },
      },
      _pressed: {
        borderColor: primaryColor,
        bg: primaryColor,
      },
    
  }
};
