import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

function MyButton = (props) => {
  return <TouchableOpacity onPress={props.onPress}><Text>{props.label}</Text></TouchableOpacity>
}

export default MyButton
