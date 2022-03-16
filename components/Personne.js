import React, {useState} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import Timer from "./Timer";




const Personne = (props)=>{




    return(
        <View style={styles.item}>

                <Text style={styles.itemText}>{props.text}</Text>


            <Timer/>

        </View>


    )


}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:  20,

    },
    itemText: {
        maxWidth : '80%',
    },
    itemTime: {

    },
    itemLeft: {
        flexDirection :'row',
        alignItems : 'center',
        flexWrap: 'wrap',
    },

})

export default Personne;