import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { RoundButton } from 'src/components/button';
import { GapV } from 'src/components/gap';
import { bRs, mgS, zIndexL, mgM } from 'src/styles';
import theme from 'src/theme/theme';

const BadgeCard = ({ title, icon, iconColor, badge, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {badge ? <Badge children={3} style={styles.badge} /> : null}

      <View style={styles.card}>
        {icon ? (
          <MaterialCommunityIcons name={icon} size={RFValue(35)} color={iconColor || 'black'} />
        ) : null}

        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.fab}>
        <MaterialCommunityIcons
          name="chevron-right"
          size={RFValue(20)}
          color={theme.colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BadgeCard;

export const Card = ({ title, price, icon }) => {
  const navigation = useNavigation();

  const navigateToRegistration = () => {
    navigation.navigate('registrationForm');
  };

  return (
    <View style={styles.container}>
      <View
        style={
          title === 'STANDARD'
            ? styles.cardView
            : [
                styles.cardView,
                {
                  backgroundColor: theme.colors.background,
                  borderWidth: 2,
                  borderColor: theme.colors.primary,
                },
              ]
        }
      >
        {icon ? (
          <>
            <View style={styles.checkmark}>
              <Ionicons
                name="ios-checkmark-circle-outline"
                size={RFValue(70)}
                color={theme.colors.secondary}
              />
            </View>

            <Text style={[styles.title, { color: theme.colors.secondary }]}>
              OUR RECOMMENDATION
            </Text>
          </>
        ) : null}

        <GapV />

        <RoundButton
          title={title}
          mode="outlined"
          disabled
          theme={
            title === 'STANDARD'
              ? theme
              : {
                  colors: {
                    onSurfaceDisabled: theme.colors.primary,
                    surfaceDisabled: theme.colors.primary,
                  },
                }
          }
        />

        <Text
          style={
            title === 'STANDARD' ? styles.price : [styles.price, { color: theme.colors.primary }]
          }
        >
          {price}
        </Text>

        <Text
          style={
            title === 'STANDARD'
              ? styles.subtitle
              : [styles.subtitle, { color: theme.colors.primary }]
          }
        >
          User/Month
        </Text>

        <GapV />

        <View style={styles.dotted}></View>

        <GapV />

        <RoundButton
          title="BOOK NOW"
          icon="arrow-right"
          mode="elevated"
          color={theme.colors.secondary}
          textColor={theme.colors.black}
          onPress={navigateToRegistration}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.colors.primary,
    fontSize: RFValue(14),
    fontWeight: '600',
    textAlign: 'center',
  },

  fab: {
    backgroundColor: theme.colors.background,
    borderRadius: 100,
    alignSelf: 'center',
    alignContent: 'center',
    top: -12,
    zIndex: zIndexL,
  },

  badge: {
    position: 'absolute',
    top: -7,
    left: 10,
    zIndex: zIndexL,
  },

  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface,
    width: RFPercentage(14),
    height: RFPercentage(14),
    borderRadius: bRs,
    padding: mgS,
    zIndex: 5,
  },

  container: {
    padding: 10,
    backgroundColor: theme.colors.background,
  },

  cardView: {
    height: RFPercentage(95),
    borderRadius: 15,
    backgroundColor: theme.colors.primary,
    padding: 10,
  },

  checkmark: {
    marginTop: mgM,
    alignSelf: 'center',
  },

  subtitle: {
    color: theme.colors.background,
    textAlign: 'center',
    fontSize: RFValue(15),
    fontWeight: '400',
  },

  price: {
    color: theme.colors.background,
    textAlign: 'center',
    fontSize: RFValue(60),
    fontWeight: '600',
  },

  dotted: {
    borderWidth: RFValue(1),
    borderColor: theme.colors.secondary,
    borderStyle: 'dotted',
  },
});
