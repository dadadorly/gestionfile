
import {Text,StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";


const LoginButton = ()=>{

    const navigation = useNavigation();


    return(

        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Admin</Text>
        </TouchableOpacity>

    )


}

const styles = StyleSheet.create({

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
})


export default LoginButton;