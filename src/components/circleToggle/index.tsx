import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  nonvegColor,
  stringConstants,
  vegColor,
} from '../../globals/constants/constants';
import { toggleProps } from '../../types';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { createToggleStyles } from './toggle.styles';

export const Toggle = (props: toggleProps) => {
  const theme = useSelector((state: RootState) => state.theme.colors);

  const colors = {
    ...theme,
    themePrimaryOrange: theme.primary,
  };

  const stylesToggle = createToggleStyles(colors);

  return (
    <View style={stylesToggle.toggleContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          stylesToggle.option,
          props.selected === stringConstants.veg && stylesToggle.activeVeg,
        ]}
        onPress={() => props.onSelect('Veg')}
      >
        <View style={[stylesToggle.circle, { backgroundColor: vegColor }]} />
        <Text style={stylesToggle.label}>{stringConstants.veg}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          stylesToggle.option,
          props.selected === stringConstants.nonVeg &&
            stylesToggle.activeNonVeg,
        ]}
        onPress={() => props.onSelect('Non-Veg')}
      >
        <View style={[stylesToggle.circle, { backgroundColor: nonvegColor }]} />
        <Text style={stylesToggle.label}>{stringConstants.nonVeg}</Text>
      </TouchableOpacity>
    </View>
  );
};
