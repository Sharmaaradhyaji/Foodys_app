import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Stacktype } from '../components/Navigation';
import { stylesHome } from '../Styles/Home.styles';

type Props = NativeStackScreenProps<Stacktype, 'Home'>;

const Home: React.FC<Props> = ({ route }) => {
  const { name, email, gender, number, place } = route.params;
  return (
    <SafeAreaView>
      <View>
        <Text style={stylesHome.heading}>User Data: </Text>
      </View>

      <View style={[stylesHome.data, stylesHome.Box]}>
        {!gender ? (
          <>
            <Text style={stylesHome.text}> Name: {name}</Text>
            <Text style={stylesHome.text}> Email: {email}</Text>
          </>
        ) : (
          <>
            <Text style={stylesHome.text}> Name: {name}</Text>
            <Text style={stylesHome.text}> Email: {email}</Text>
            <Text style={stylesHome.text}> Gender: {gender}</Text>
            <Text style={stylesHome.text}> Contact no.: {number}</Text>
            <Text style={stylesHome.text}> Place: {place}</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;