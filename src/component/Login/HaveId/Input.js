import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function Input() {
  const [myTextInput, setmyTextInput] = useState('');
  const onChangeInput = event => {
    setmyTextInput(event);
  };
  return (
    <View
      style={{
        paddingTop: 50,
        paddingBottom: 48,
        width: '100%',
        alignItems: 'center',
      }}>
      <TextInput
        value={myTextInput}
        placeholder="비밀번호 입력"
        style={styles.input}
        onChangeText={onChangeInput}
        multiline={true}
        maxLength={10}
        autoCapitalize={'none'}
        editable={true}
        textAlign={'center'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: 56,
    backgroundColor: '#FBFBFB',
    marginTop: 20,
    borderRadius: 12,
    borderColor: '#D6D7D9',
    borderWidth: 1,
    paddingBottom: 0,
    paddingTop: 0,
    justifyContent: 'center',
    lineHeight: 20,
  },
});
