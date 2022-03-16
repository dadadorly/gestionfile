import React, {useEffect, useRef, useState} from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";





const Timer = ()=>{
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    useEffect(()=>{
        handleStart()
    },[])
    return(
        <View>

            <View style={styles.textTime}>
                <Text> {formatTime()}</Text>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    textTime: {
      fontWeight: 'bold',
        marginTop: 80,
    },
})

export default Timer;