import React from "react";
import {Text, View} from "react-native";
import {Message} from "../../types";
import moment from "moment";
import styles from "./styles";

export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props;

    const inMyMessage = () => {
      return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View
                style={[styles.messageBox, {
                    backgroundColor: inMyMessage() ? '#DCF8C5' : 'white',
                    marginLeft: inMyMessage() ? 50 : 0,
                    marginRight: inMyMessage() ? 0 : 50,
                }

            ]}>
                {!inMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
}

export default ChatMessage;