import { Text, View } from 'react-native';
import React from 'react';
import { detailsStyle } from './detail.styles';
import { profile } from '../../globals/constants/constants';

const Details = ({name, detail}: any) => {
  return (
    <View style={detailsStyle.data}>
      <Text style={detailsStyle.label}>{detail}</Text>
      <Text style={detailsStyle.value}>{name || [profile.notAvailable]}</Text>
    </View>
  );
};

export default Details;
