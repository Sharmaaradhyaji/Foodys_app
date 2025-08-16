import { Text, View } from 'react-native';
import React from 'react';
import { detailsStyle } from './detail.styles';
import { profileText } from '../../globals/constants/constants';

const Details = ({name, detail}: any) => {
  return (
    <View style={detailsStyle.data}>
      <Text style={detailsStyle.label}>{detail}</Text>
      <Text style={detailsStyle.value}>{name || [profileText.notAvailable]}</Text>
    </View>
  );
};

export default Details;
