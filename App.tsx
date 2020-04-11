
import React, {useState} from 'react';
import {View, StyleProp, TextStyle, ViewStyle, TouchableOpacity, ScrollView, Text} from 'react-native';

const styles: {[name: string]: StyleProp<ViewStyle> | StyleProp<TextStyle>} = {
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignContent: 'center'
  },
  button: {
    width: 200,
    height: 200,
    margin: 50,
    justifyContent: 'center',
    backgroundColor: `rgba(100,255,255,0.3)`
  },
  buttonText: {
    color: '#FFF',
    alignSelf: 'center'
  }
};
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const columns = ['a', 'b', 'c', 'd', 'e', 'f'];

const doNothing = () => {};

type Props = {
  text: string;
  number: number;
}
const MyButton = (props: Props) => {
  const [focused, setfocused] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.button, focused && {backgroundColor: 'rgba(100,255,255,0.6)'}]}
      key={props.text + props.number}
      onPress={doNothing}
      onFocus={() => setfocused(true)}
      onBlur={() => setfocused(false)}
    >
      <Text style={styles.buttonText}>{props.text + props.number}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {rows.map((number) => (
          <ScrollView
            horizontal={true}
            key={'scrollview' + number}
          >
            {columns.map((text) => <MyButton text={text} number={number} key={text + number} />)}
          </ScrollView>
        ))
        }
      </ScrollView>
    </View>
  );
};

export default App;
