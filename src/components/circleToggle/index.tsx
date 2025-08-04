import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { stylesToggle } from './toggle.styles';
import { stringConstants, theme } from '../../globals/constants/constants';
import { toggleProps } from '../../types';

export const Toggle = (props: toggleProps) => {
  return (
    <View style={stylesToggle.toggleContainer}>
      <TouchableOpacity
      activeOpacity={0.9}
        style={[stylesToggle.option, props.selected === 'veg' && stylesToggle.activeVeg]}
        onPress={() => props.onSelect('veg')}
      >
        <View style={[stylesToggle.circle, { backgroundColor: theme.vegColor }]} />
        <Text style={stylesToggle.label}>{stringConstants.veg}</Text>
      </TouchableOpacity>

      <TouchableOpacity
      activeOpacity={0.9}
        style={[stylesToggle.option, props.selected === 'nonveg' && stylesToggle.activeNonVeg]}
        onPress={() => props.onSelect('nonveg')}
      >
        <View style={[stylesToggle.circle, { backgroundColor: theme.nonvegColor }]} />
        <Text style={stylesToggle.label}>{stringConstants.nonVeg}</Text>
      </TouchableOpacity>
    </View>
  );
};
