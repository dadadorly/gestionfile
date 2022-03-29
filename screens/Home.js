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
    Keyboard,
    Button, Vibration,
} from 'react-native';

import  {useEffect, useState} from 'react';
import Personne from "components/Personne";
import {useNavigation} from "@react-navigation/native";
import LoginButton from "components/LoginButton";
import {auth} from '../firebase-config'




const Home=() =>{


    const navigation = useNavigation()


    const [person, setPerson]=useState(1);
    const [personItems, setPersonItems]= useState([]);

    const [isAdmin, setIsAdmin] =useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {


                setIsAdmin(prevState => !prevState);


            }

        })
        return unsubscribe
    }, [])

    const [currentColor,setCurrentColor] = useState('#E8EAED');
    const [max, setMax] = useState(0);

    const [moi,setMoi] = useState(null);

    const handleAddPerson = () =>{

        if(isAdmin==true ) {
            setPerson(prevState => prevState+1)


            setPersonItems([...personItems, person]);


        }
        else if(max!=1) {
            setPerson(prevState => prevState+1)

            setMoi(person)
            setMax(1);
            setPersonItems([...personItems, person]);
            setCurrentColor('blue');
        }


    }

    const handleDeletePerson =(index) => {

        if(isAdmin==true ) {

            let itemsCopy = [...personItems];
            if (itemsCopy[index]==moi){
                Vibration.vibrate();
            }
            itemsCopy.splice(index, 1);
            setPersonItems(itemsCopy);

        }
        else if ( moi!=null && personItems[index]== moi ){
            let itemsCopy = [...personItems];
            itemsCopy.splice(index, 1);
            setPersonItems(itemsCopy);
            setMax(0)
        }
    }

    const changeIsAdmin = () =>{
        setIsAdmin(prevState => !prevState);
    }
    useEffect(()=>{
        auth.signOut().then(console.log("signed out"))
        renderLogin();
    }, [isAdmin])

    const renderLogin = () =>{
        if(isAdmin==true){

            //return <LogoutButton/>;
            return <TouchableOpacity onPress={() => changeIsAdmin()} style={styles.buttonLogin}>
                <Text style={styles.buttonLoginText}>Logout</Text>
            </TouchableOpacity>
        }
        else{

            return <LoginButton/>;

        }
    }


    return (

        <View style={styles.container}>

            <Text style={styles.title}>Queued in</Text>

            <ScrollView>
                <View style={[styles.personWrapper]}>
                    <View style={[styles.items]}>
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
            {renderLogin()}

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writePersonWrapper}
            >
                {/* <TextInput style={styles.input} placeholder={"Write a name"} value={person} onChangeText={text => setPerson(text)}/>*/}

                <TouchableOpacity onPress={() => handleAddPerson()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>JOIN</Text>
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
        position : "relative",
        alignItems: "center",
    },
    title: {
        paddingTop: 60,

        fontWeight: 'bold',
        fontSize: 24,
    },
    items: {
    width : 350,
    },
    personWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,


    },
    writePersonWrapper: {
        position: 'absolute',
        bottom: 110,
        justifyContent: 'center',
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


        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',


        width: 200,
        padding: 15,
        borderRadius: 20,

        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,


    },
    buttonLogin: {

        position: 'absolute',
        bottom : 40,


        backgroundColor : '#0782F9',
        width: '35%',
        padding: 15,
        borderRadius: 10,
        height : 50,


        borderColor: '#0782F9',
        borderWidth: 2,
        alignItems : 'center',
    },
    buttonLoginText: {
        color : 'white',
        fontWeight: '700',
        fontSize: 14,
    },
    addText : {
        fontSize : 24,
        fontWeight : '700',
        color : '#0782F9',
    }

});
