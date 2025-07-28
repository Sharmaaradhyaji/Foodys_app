import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesHeading } from './heading.styles'

const Heading = ({ text }: any) => {
  return (
    <View >
      <Text style={stylesHeading.heading}>{text}</Text>
    </View>
  )
}

export default Heading