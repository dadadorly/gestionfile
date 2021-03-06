import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform} from 'react-native'

import {auth} from '../firebase-config'
import {useNavigation} from "@react-navigation/native";



const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const navigation = useNavigation()


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {

                navigation.navigate("Home");
            }
        })
        return unsubscribe
    }, [])
    const handleSignUp =() => {
        auth.createUserWithEmailAndPassword(email,password)
            .then(userCredentials =>{
                const user = userCredentials.user;

                alert("Vous etes inscrit");
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email,password)
            .then(userCredentials =>{
                const user = userCredentials.user;

            })
            .catch(error => alert(error.message))
    }


    return (

        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonGoBack}>
                <Text style={styles.buttonGoBackText}>Go BACK</Text>
            </TouchableOpacity>

            <View style={styles.inputContainer}>

                <TextInput placeholder={"Email"} value={email} onChangeText={text => setEmail(text)} style={styles.input}/>
                <TextInput placeholder={"Password"} value={password} onChangeText={text => setPassword(text)} style={styles.input} secureTextEntry />

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() =>  handleLogin()} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                {/*
                <TouchableOpacity onPress={() =>  handleSignUp()} style={styles.buttonReg}>

                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
                */}
            </View>

        </KeyboardAvoidingView>



    )

}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',

    },
    inputContainer:{
        width : '80%'
    },
    input: {
        backgroundColor : 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius : 10,
        marginTop: 5,


    },
    buttonOutline:{



    },
    button:{
        backgroundColor : '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,

        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
        alignItems:'center',
    },
    buttonReg:{
        backgroundColor : 'white',
        width: '100%',
        padding: 15,
        borderRadius: 10,

        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
        alignItems:'center',
    },
    buttonContainer:{
        width :'60%',
        justifyContent :'center',
        alignItems : 'center',
        marginTop: 40,

    },
    buttonText:{
        color : 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText:{
            color : '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonGoBack:{
        backgroundColor : '#0782F9',
        width: '25%',
        padding: 15,
        borderRadius: 10,


        borderColor: '#0782F9',
        borderWidth: 2,
        alignItems:'center',

        position : "absolute",
        bottom : 80,

    },
    buttonGoBackText:{
        color : 'white',
        fontWeight: '700',
        fontSize: 16,
    }


})