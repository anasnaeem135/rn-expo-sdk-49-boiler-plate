/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RNDropdownPicker from 'react-native-dropdown-picker';
import { useTheme, HelperText } from 'react-native-paper';
import { bRss, mgS, mgSs, mgM, zIndexM, zIndexL, buttonText, bRs } from 'src/styles';

import { theme } from 'src/theme';

const keyExtractor = (item, index) => String(`modalItem${index}`);
// import { CustomText } from './customText';

export function DropDownPicker({
  title,
  customIcon,
  handleCustomIcon,
  items = [],
  value,
  helper,
  setValue,
  onSelectItem,
  placeholder,
  modalTitle,
  searchable,
}) {
  // const { colors } = useTheme();
  // const styles = styless(colors);
  // const gstyles = globalstyless();

  const [openDropDown, setOpenDropDown] = useState(false);

  const Icon = (
    <MaterialCommunityIcons
      name={customIcon}
      size={22}
      onPress={handleCustomIcon}
      styles={{ marginLeft: 10 }}
    />
  );

  return (
    <>
      <View styles={styles.titledButtonView}>
        {/* <CustomText styles={[styles.titledButtonTitle]}>{title}</CustomText> */}
        <RNDropdownPicker
          open={openDropDown}
          value={value}
          items={items}
          setOpen={setOpenDropDown}
          setValue={setValue}
          onSelectItem={onSelectItem}
          icon={customIcon && Icon}
          // setItems={setItems}

          // props
          // addCustomItem
          // customItemContainerstyles
          placeholder={placeholder}
          placeholderStyle={{ color: theme.colors.primaryAccent }}
          searchPlaceholder="Search..."
          modalTitle={modalTitle}
          searchable={searchable}
          ListEmptyComponent={() => <View />}
          stickyHeader
          listMode="MODAL"
          modalProps={{
            animationType: 'slide',
          }}
          flatListProps={{
            keyExtractor,
          }}
          labelProps={{
            numberOfLines: 1,
          }}
          //
          // components
          //   CloseIconComponent={() => (
          //     <IonIcons name="close" color={colors.primary} size={iconSize} />
          //   )}
          // TickIconComponent={() => (
          //   <IonIcons name={"checkmark"} color={colors.primary} size={iconSize} />
          // )}

          // styless
          zIndex={zIndexM}
          style={styles.dropDown}
          labelStyle={styles.lable}
          placeholderStyles={styles.placeholder}
          selectedItemLabelStyle={styles.selectedLabel}
          searchContainerStyle={[styles.searchContainer]}
          modalContentContainerStyle={styles.modlaContainer}
          listItemContainerStyle={[styles.listItem]}
          searchTextInputStyle={[styles.searchbar]}
          selectedItemContainerStyle={[styles.selectedContainer]}
        />
      </View>

      {helper && <HelperText type="error">{helper}</HelperText>}
    </>
  );
}

const styles = StyleSheet.create({
  titledButtonTitle: {
    textAlign: 'left',
    position: 'absolute',
    zIndex: zIndexL,
    borderRadius: bRss,
    top: -mgS,
    left: mgSs * 2,
    paddingHorizontal: mgSs,
    color: theme.colors.placeholder,
    backgroundColor: theme.colors.background,
  },

  titledButtonView: {
    borderWidth: 10,
    borderRadius: mgSs,
    borderColor: theme.colors.secondary,
  },

  dropDown: {
    // backgroundColor: colors.surface,
    backgroundColor: theme.colors.background,
    borderRadius: bRs,
    zIndex: zIndexM,
    borderColor: theme.colors.primaryAccent,
    borderWidth: 1,
    // paddingHorizontal: pdHs,
    padding: mgS,
  },

  lable: {
    fontSize: buttonText,
    color: theme.colors.primaryAccent,
    // backgroundColor: 'red',
    // color: theme.colors.text,
  },

  placeholder: {
    // fontSize: buttonText,
    // color: theme.colors.placeholder,
  },

  modlaContainer: {
    padding: mgM,
    // borderWidth: stylesSheet.hairlineWidth,
    // backgroundColor: theme.colors.inverseOnSurface,
    // backgroundColor: 'red',
    borderRadius: bRss,
  },

  searchContainer: {
    // backgroundColor: colors.notification,
  },

  searchbar: {
    // backgroundColor: theme.colors.surface,
  },

  closeIcon: { color: theme.colors.secondary },

  listItem: {
    backgroundColor: 'red',
    // borderRadius: bRss,
    // marginTop: mgSs,
    // marginHorizontal: mgSs,
    // borderWidth: stylesSheet.hairlineWidth,
    // marginTop: styleSheet.hairlineWidth,
  },

  selectedLabel: {
    fontWeight: 'bold',
    // backgroundColor: theme.colors.secondary,
    //   color: onBackgroundDark,
  },

  selectedContainer: {
    backgroundColor: theme.colors.secondary,
    // marginTop: styleSheet.hairlineWidth,
  },
});
