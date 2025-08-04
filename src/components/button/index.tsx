import { Pressable, Text } from 'react-native';
import React from 'react';
import { styles } from './primarybutton.styles';
import { PrimaryBtnProps } from '../../types';

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ title = "Submit", onPress, style, textStyle }) => {
  return (
    <Pressable style={[styles.buttonBackground, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryBtn;

