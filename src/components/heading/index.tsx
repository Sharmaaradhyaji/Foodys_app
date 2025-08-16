import { Text, View } from 'react-native'
import React from 'react'
import { HeadingProps } from '../../types'

const Heading = (props: HeadingProps) => {
  return (
    <View >
      <Text style={props.styles}>{props.text}</Text>
    </View>
  )
}

export default Heading