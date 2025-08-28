import { Text, View } from 'react-native';
import React from 'react';
import { detailsStyle } from './detail.styles';
import { profileText } from '../../globals/constants/constants';

type Detail = {
  name?: string
  detail: string
} 

const Details = ({name, detail}: Detail) => {
  return (
    <View style={detailsStyle.data}>
      <Text style={detailsStyle.label}>{detail}</Text>
      <Text style={detailsStyle.value}>{name}</Text>
    </View>
  );
};

export default Details;
