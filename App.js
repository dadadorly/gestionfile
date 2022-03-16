import {StatusBar} from 'expo-status-bar';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Keyboard
} from 'react-native';
import Test from "./components/Test";
import ButtonAdd from "./components/ButtonAdd";

import React, {useState} from 'react';
import Personne from "./components/Personne";
import {Touchable} from "react-native-web";
import Timer from "./components/Timer";


export default function App() {
    const [person, setPerson]=useState();
    const [personItems, setPersonItems]= useState([]);

    const handleAddPerson = () =>{
        Keyboard.dismiss();
        setPersonItems([...personItems,person]);
        setPerson(null);
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Gestion de file</Text>
            <View style={styles.personWrapper}>
                <View style={styles.items}>
                    {
                        personItems.map((item,index)=>{
                            return <Personne key={index} text={item}/>
                        })
                    }

                </View>
            </View>
            <StatusBar style="auto"/>


        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writePersonWrapper}
        >
        <TextInput style={styles.input} placeholder={"Write a name"} value={person} onChangeText={text => setPerson(text)}/>

        <TouchableOpacity onPress={() => handleAddPerson()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
       // alignItems: 'center',
       // justifyContent: 'center',
    },
    title: {
        paddingTop: 60,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 24,
    },
    items: {

    },
    personWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,


    },
    writePersonWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper:{
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,

    },
    addText: {},
});
