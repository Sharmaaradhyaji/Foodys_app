import { Text, View } from 'react-native'
import React from 'react'
import { headingProps } from '../../types'

const Heading = (props: headingProps) => {
  return (
    <View >
      <Text style={props.styles}>{props.text}</Text>
    </View>
  )
}

export default Heading