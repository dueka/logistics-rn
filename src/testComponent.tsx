/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';

const YourApp: React.FC<{title: string}> = ({title}) => {
  const [text, setText] = useState('')
    return (
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
        Abeg Show me the {title}.🎉
        </Text>
        <Image
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
          style={{width: 200, height: 200 }}
        />
<TextInput />
      </View>
      <View style={{padding: 10}}> 
        <TextInput 
          style={{height: 40}}
          placeholder="FirstName"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      </ScrollView>

    );
  };
export default YourApp;