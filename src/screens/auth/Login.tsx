import { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    Dimensions,
    StyleSheet,
    Button,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    Pressable
} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { trigger } from "react-native-haptic-feedback";

const screenDimensions = Dimensions.get('screen');

const Login = ({ navigation }: any) => {

    return (
        <>
            <Pressable
                onPress={() => navigation.navigate("Main")}
            >
                <Text>
                    Click
                </Text>
            </Pressable>
        </>
    );
}

export default Login;
