import {auth} from '../firebase-config'
import {Text,StyleSheet, TouchableOpacity} from "react-native";



const LogoutButton = ()=>{



    const signOutUser = () => {
        auth.signOut().then(function() {



        }).catch(function(error) {
            // An error happened.
        });
    }

    return(

        <TouchableOpacity onPress={() => signOutUser()} style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Logout</Text>
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


export default LogoutButton;