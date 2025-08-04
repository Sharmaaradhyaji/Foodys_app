import { Text, View } from 'react-native';
import React from 'react';
import { detailsStyle } from './detail.styles';

const Details = ({name, detail}: any) => {
  return (
    <View style={detailsStyle.data}>
      <Text style={detailsStyle.label}>{detail}</Text>
      <Text style={detailsStyle.value}>{name || 'N/A'}</Text>
    </View>
  );
};

export default Details;
