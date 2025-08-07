import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { stringConstants } from '../../globals/constants/constants';
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
      {/* Veg Option */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={[stylesToggle.option, props.selected === 'Veg' && stylesToggle.activeVeg]}
        onPress={() => props.onSelect('Veg')}
      >
        <View style={[stylesToggle.circle, { backgroundColor: '#28a745' }]} /> 
        <Text style={stylesToggle.label}>{stringConstants.veg}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={[stylesToggle.option, props.selected === 'Non-Veg' && stylesToggle.activeNonVeg]}
        onPress={() => props.onSelect('Non-Veg')}
      >
        <View style={[stylesToggle.circle, { backgroundColor: '#dc3545' }]} /> 
        <Text style={stylesToggle.label}>{stringConstants.nonVeg}</Text>
      </TouchableOpacity>
    </View>
  );
};
