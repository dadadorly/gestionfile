
import {Text,StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";


const LoginButton = ()=>{

    const navigation = useNavigation();


    return(

        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Login</Text>
        </TouchableOpacity>

    )


}

const styles = StyleSheet.create({

    buttonLogin: {

        position:"absolute",
        top: 50,
        right : 10,

        backgroundColor : '#0782F9',
        width: '25%',
        padding: 15,
        borderRadius: 10,


        borderColor: '#0782F9',
        borderWidth: 2,
        alignItems:'center',
    },
    buttonLoginText: {
        color : 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})


export default LoginButton;