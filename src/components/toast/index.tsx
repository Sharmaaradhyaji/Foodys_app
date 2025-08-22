import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { brand } from '../../globals/globals';
import { CustomToastProps } from '../../types';
import { styles } from './toastStyles';
import { theme } from '../../globals/constants/constants';

export const CustomToast: React.FC<CustomToastProps> = ({ text1, text2, type = 'success' }) => {
  let backgroundColor = brand.primary; 
  let color = brand.white; 

  if (type === 'error') {
    backgroundColor = brand.nonveg;
    color = theme.errorTextToast
  }
  else if (type === 'info') {
    backgroundColor = theme.infoBgToast;
  }
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.title, {color}]}>{text1}</Text>
      {text2 && <Text style={[styles.message, {color}]}>{text2}</Text>}
    </View>
  );
};

