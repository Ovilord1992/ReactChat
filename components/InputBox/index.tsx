import React, {useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from './styles';
import {MaterialCommunityIcons, FontAwesome5, Entypo, Fontisto, MaterialIcons} from "@expo/vector-icons";

const InputBox = () => {

    const [message, setMessage] = useState('');
    
    const onMicrophonePress = () => {
      console.warn('micro')
    }

    const onSEndPress = () => {
        console.warn(`Send : ${message}`)


        setMessage('');
    }
    
    const onPress = () => {
      if (!message) {
          onMicrophonePress();
      }else {
          onSEndPress();
      }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icons}/>
                {!message && <Fontisto name="camera" size={24} color="grey"/>}
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer}>
                {!message
                    ? <MaterialCommunityIcons name="microphone" size={28} color="white"/>
                    : <MaterialIcons name="send" size={28} color="white"/>
                }

            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;