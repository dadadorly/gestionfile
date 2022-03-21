import {StatusBar} from 'expo-status-bar';
import {
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Keyboard
} from 'react-native';

import React, {useEffect,useState} from 'react';
import Personne from "components/Personne";



const Home=() =>{


    const [person, setPerson]=useState();
    const [personItems, setPersonItems]= useState([]);

    const handleAddPerson = () =>{
        Keyboard.dismiss();
        setPersonItems([...personItems,person]);
        setPerson(null);
    }

    const handleDeletePerson =(index) => {
        let itemsCopy =[...personItems];
        itemsCopy.splice(index,1);
        setPersonItems(itemsCopy);
    }


    return (

        <View style={styles.container}>

            <Text style={styles.title}>Gestion de file</Text>
            <ScrollView>
                <View style={styles.personWrapper}>
                    <View style={styles.items}>
                        {
                            personItems.map((item,index)=>{
                                return(
                                    <TouchableOpacity key={index} onPress={() => handleDeletePerson(index)}>

                                        <Personne  text={item}/>
                                    </TouchableOpacity>
                                )
                            })
                        }

                    </View>
                </View>
            </ScrollView>

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

export default Home;

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
