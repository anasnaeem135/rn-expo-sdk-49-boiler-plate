import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, FAB, IconButton as PaperIconButton } from 'react-native-paper';

import { buttonHeight, mgS, mgL } from 'src/styles/index';

import { theme } from 'src/theme/index';

export function RoundButton({
  title,
  onPress,
  loading,
  icon,
  compact,
  disabled,
  mode,
  uppercase,
  children,
  color,
  borderColor,
  ...props
}) {
  // const { colors } = useTheme();
  // const style = styles(colors);

  return (
    <Button
      mode={mode || 'contained'}
      onPress={onPress}
      loading={loading}
      disabled={disabled || loading}
      uppercase={uppercase}
      compact={compact}
      buttonColor={color}
      icon={icon}
      contentStyle={[styles.fdrr, styles.roundButton]}
      borderColor={borderColor}
      style={{ width: 255, borderRadius: 10, alignSelf: 'center' }}
      {...props}
    >
      {title}
      <>{children}</>
    </Button>
  );
}

export function IconButton({ onPress, size, color, name, style, disabled }) {
  // const { colors } = useTheme();
  // const style = styles(colors);

  return (
    <PaperIconButton
      // hitSlop={hitSlopS}
      icon={name}
      style={[styles.iconButton, style]}
      iconColor={color}
      size={size}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

export function Fab({ title, onPress, color, icon, small, visible, bottomRight, loading }) {
  // const { colors } = useTheme();
  // const style = styles(colors);

  return (
    <FAB
      label={title}
      visible={visible}
      hitSlop={hitSlopS}
      style={[styles.fab, bottomRight && styles.fabBottomRight]}
      small={small}
      icon={icon}
      color={color}
      onPress={onPress}
      loading={loading}
      disabled={loading}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: { flex: 1 },

  roundButton: {
    minHeight: buttonHeight,
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    maxWidth: 255,
    // alignSelf: 'center',
  },

  fab: { margin: mgS },

  fabBottomRight: {
    position: 'absolute',
    bottom: mgL,
    right: mgS,
  },

  fdrr: {
    flexDirection: 'row-reverse',
  },
});
