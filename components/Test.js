import React, {useState} from "react";
import {View, Text, Button, Alert} from "react-native";




const Test = ()=>{

    const [persons,setPersons] = useState([
        {
            name:"Houmame",
            age:22
        },{
            name:"David",
            age:22
        },{
            name:"Omar",
            age:22
        },{
            name:"Mehdi",
            age:22
        },
    ]);

    function handleClick() {
        console.log("Pressed")
    }

    return(
        <View>
            <Text>
                {persons.map((person,index)=>{
                    return(
                        <Text key={index} style={{
                        }}>{person.name}{"\n"}</Text>
                    )
                })}
            </Text>
            <Button title="Press me "  onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>


    )
}

export default Test;