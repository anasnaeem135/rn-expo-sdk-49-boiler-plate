import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0038A8',
    secondary: '#FFC72C',
    outline: '#FFC72C',
    subheading: '#114054',
    placeholder: '#195068',
    primaryAccent: '#ABCAEA',
    heading: '#114054',
    caption: '#28377B',
    black: '#000',
    muted: '#ABCAEA',
    background: '#ffff',
    surface: '#D0E5EF',
    onSurface: '#195068',
    surfaceDisabled: '#ffff',
    onSurfaceDisabled: '#ffff',
    onSurfaceVariant: '#ABCAEA',

    elevation: {
      level3: '#ffff',
      onsSurfaceVariant: '#FFC72C',
    },
  },
};

export default theme;
